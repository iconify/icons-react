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
		"content": `<style>.pxfjfu3pr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.671 12.585l5.658 2.83a1.5 1.5 0 0 0 1.342 0l5.658-2.83a1.5 1.5 0 0 1 2.171 1.342v3.646a1.5 1.5 0 0 1-2.171 1.342l-5.658-2.83a1.5 1.5 0 0 0-1.342 0l-5.658 2.83A1.5 1.5 0 0 1 3.5 17.573v-3.646a1.5 1.5 0 0 1 2.171-1.342M12 9v6.75M10.125 3h3.75A2.625 2.625 0 0 1 16.5 5.625v.75A2.625 2.625 0 0 1 13.875 9h-3.75A2.625 2.625 0 0 1 7.5 6.375v-.75A2.625 2.625 0 0 1 10.125 3");
}
</style><path class="pxfjfu3pr"/>`,
		"fallback": "uix:valve-actuator",
	});
}

export default Component;
