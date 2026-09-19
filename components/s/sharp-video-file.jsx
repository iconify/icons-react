import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xhlbzlc6h {
  fill: currentColor;
  d: path("M14 2H4v20h16V8zm-1 7V3.5L18.5 9zm1 5l2-1.06v4.12L14 16v2H8v-6h6z");
}
</style><path class="xhlbzlc6h"/>`,
		"fallback": "ic:sharp-video-file",
	});
}

export default Component;
