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
		"content": `<style>.m8w-kpgkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3S6.5 9.5 6.5 13a5.5 5.5 0 0 0 11 0C17.5 9.5 12 3 12 3M7 21.5h10");
}
</style><path class="m8w-kpgkf"/>`,
		"fallback": "uix:rainfall-light",
	});
}

export default Component;
