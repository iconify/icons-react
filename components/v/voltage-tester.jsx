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
		"content": `<style>.wxygwsrlx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.26 18.26l7.5-7.5L16 8l-2.76 5.24l-7.5 7.5a1.75 1.75 0 0 1-2.48-2.48m7.5-7.5l2.48 2.48m5.71-5.76l1.97-.35m-4.4-2.08l.35-1.97");
}
</style><path class="wxygwsrlx"/>`,
		"fallback": "iconoven:voltage-tester",
	});
}

export default Component;
