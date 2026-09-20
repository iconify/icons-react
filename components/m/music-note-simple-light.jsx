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
		"content": `<style>.by3p6-b2w {
  fill: currentColor;
  d: path("m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V48.06l72.27 21.69a6 6 0 1 0 3.45-11.5M88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34");
}
</style><path class="by3p6-b2w"/>`,
		"fallback": "ph:music-note-simple-light",
	});
}

export default Component;
