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
		"content": `<style>.tbi2n09cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.475 10.697l2.828 2.828l-7.778 7.778l-2.828-2.828ZM8.25 12.75l3 3m2-6.5C12 7 15.5 5.5 14.5 2.5m2 8.75c1-2.25 4-1.25 5-4.75");
}
</style><path class="tbi2n09cu"/>`,
		"fallback": "uix-sharp:smoke-flare",
	});
}

export default Component;
