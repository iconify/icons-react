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
		"content": `<style>.tqqdzd8fz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 9H9.5A1.5 1.5 0 0 0 8 10.5v11h4Zm0 0h2l3.5 7.5H12m2.75 0v5");
}
</style><path class="tqqdzd8fz"/>`,
		"fallback": "uix:toilet-gender-neutral",
	});
}

export default Component;
