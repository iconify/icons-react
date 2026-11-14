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
		"content": `<style>.p0_-wb7qu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l6-18m12 18l-6-18m-7 15h.01m7.49 0h.01m-3.51-6h.01M11 6.5h.01");
}
</style><path class="p0_-wb7qu"/>`,
		"fallback": "uix:path-gravel",
	});
}

export default Component;
