import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f0nj-qlga {
  fill: currentColor;
  d: path("M228 48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V52h-20a4 4 0 0 1 0-8h20V24a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-16 64v52a32.06 32.06 0 1 1-8-21.13V112a4 4 0 0 1 8 0m-8 52a24 24 0 1 0-24 24a24 24 0 0 0 24-24M84 107.12V196a32.06 32.06 0 1 1-8-21.13V56a4 4 0 0 1 3-3.88l56-14a4 4 0 0 1 2 7.76L84 59.12v39.76l75-18.76a4 4 0 0 1 2 7.76ZM76 196a24 24 0 1 0-24 24a24 24 0 0 0 24-24");
}
</style><path class="f0nj-qlga"/>`,
		"fallback": "ph:music-notes-plus-thin",
	});
}

export default Component;
