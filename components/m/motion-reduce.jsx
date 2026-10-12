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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-lcgvb0t {
  d: path("M2.75 8.5h1.5m2 0h1.5m-5 3.5h1.5m2 0h2m-5.5 3.5h1.5m2 0h1.5");
}

.roq2xac0a {
  cx: 16px;
  cy: 12px;
  r: 5.25px;
}
</style><g class="hntgybcog"><circle class="roq2xac0a"/><path class="p-lcgvb0t"/></g>`,
		"fallback": "iconoven:motion-reduce",
	});
}

export default Component;
