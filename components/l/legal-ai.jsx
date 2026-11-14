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
		"content": `<style>.ztj5aubgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6h15m-7.5-3v16.5m-2.75 0h3.9M4.75 6L2.5 12.5a2.25 2.25 0 0 0 4.5 0Zm15.245 6.644Q20 12.572 20 12.5L17.75 6l-2.25 6.5q0 .366.116.713q.116.348.337.64M18.5 15c0 2.5 1 3.5 3.5 3.5c-2.5 0-3.5 1-3.5 3.5c0-2.5-1-3.5-3.5-3.5c2.5 0 3.5-1 3.5-3.5");
}
</style><path class="ztj5aubgj"/>`,
		"fallback": "uix:legal-ai",
	});
}

export default Component;
