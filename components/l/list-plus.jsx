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
		"content": `<style>.t8ouu33lj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4H22M2 11H22M2 18H6M10 18H14M20 16V20M18 18H22");
}
</style><path class="t8ouu33lj"/>`,
		"fallback": "keyline-icons:list-plus",
	});
}

export default Component;
