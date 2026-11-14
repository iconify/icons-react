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
		"content": `<style>.xkyvdurgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.949 3.411-6.436 7.828-6.499M15.25 21l5.5-5.5m-6.25.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 4.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="xkyvdurgw"/>`,
		"fallback": "uix-sharp:turnover-rate",
	});
}

export default Component;
