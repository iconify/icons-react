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
		"content": `<style>.meirc-bkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v14M7 3.5h11L15 7l3 3.5H7ZM2.5 20H6m3.5 0h5m3.5 0h3.5");
}
</style><path class="meirc-bkq"/>`,
		"fallback": "uix-sharp:starting-line",
	});
}

export default Component;
