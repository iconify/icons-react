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
		"content": `<style>.myn05nn-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 3 5Zm5.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM3 11a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 3 11Zm5.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM3 17a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 3 17Zm5.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM4.75 5h.01M10 11h.01m-5.26 6h.01M19.684 2.722l2.415.647l-3.495 13.04L16.75 18.5l-.56-2.738Zm-.906 3.38l2.415.647");
}
</style><path class="myn05nn-d"/>`,
		"fallback": "uix-sharp:skills-assessment",
	});
}

export default Component;
