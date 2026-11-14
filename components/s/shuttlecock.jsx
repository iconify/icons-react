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
		"content": `<style>.h0qcuk6jy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 17h6v1a3 3 0 0 1-6 0Zm-.342-1.026l-3.5-10.5A1.5 1.5 0 0 1 6.581 3.5h10.838a1.5 1.5 0 0 1 1.423 1.974l-3.5 10.5A1.5 1.5 0 0 1 13.919 17h-3.838a1.5 1.5 0 0 1-1.423-1.026M12 17V3.5m-5.5 6h11");
}
</style><path class="h0qcuk6jy"/>`,
		"fallback": "uix:shuttlecock",
	});
}

export default Component;
