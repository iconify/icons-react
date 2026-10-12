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
		"content": `<style>.rqx__sb3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 10a1.5 1.5 0 0 1 1.5-1.5h3l7.45-4.4a1 1 0 0 1 1.5.86v14.08a1 1 0 0 1-1.5.86l-7.45-4.4h-3a1.5 1.5 0 0 1-1.5-1.5Zm4.5 5.5l1.25 4.75m10.75-10.5v4.5");
}
</style><path class="rqx__sb3j"/>`,
		"fallback": "iconoven:megaphone-off",
	});
}

export default Component;
