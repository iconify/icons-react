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

.m1r5rg96a {
  width: 12px;
  height: 8px;
  x: 2.75px;
  y: 5.75px;
  rx: 2px;
}

.nbhpv31pe {
  d: path("M6.25 8.5V11m3-2.5V11m5.5-5.25l6.5-3m-6.5 11l6.5 3m-12.5-3v7.5m-3.75 0h7.5");
}
</style><g class="hntgybcog"><rect class="m1r5rg96a"/><path class="nbhpv31pe"/></g>`,
		"fallback": "iconoven:studio-light",
	});
}

export default Component;
