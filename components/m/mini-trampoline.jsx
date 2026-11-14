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
		"content": `<style>.hiqabfbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5a9 3.5 0 1 0 18 0a9 3.5 0 1 0-18 0M6 16l-.5 4.5M18 16l.5 4.5M12 7.25V2.5M9.5 5L12 2.5L14.5 5");
}
</style><path class="hiqabfbzs"/>`,
		"fallback": "uix:mini-trampoline",
	});
}

export default Component;
