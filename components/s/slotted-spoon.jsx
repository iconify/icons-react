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
		"content": `<style>.rkvjn2cii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.36 19.64a5.5 3.75-45 1 1 7.78-7.78a5.5 3.75-45 1 1-7.78 7.78m3.53-1.77l2.48-2.48m-4.24.72l2.48-2.48m3.53-1.77l8.61-8.61");
}
</style><path class="rkvjn2cii"/>`,
		"fallback": "iconoven:slotted-spoon",
	});
}

export default Component;
