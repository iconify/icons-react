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

.hvf1rvi4c {
  d: path("M3.773 18.75a9.5 9.5 0 1 1 16.454 0");
}

.m3500wbus {
  d: path("m11.641 10.206l-1.46 2.246a.678.678 0 0 0 .569 1.048a1.037 1.037 0 0 1 1.02 1.229l-.145.771a.403.403 0 0 0 .734.294l1.46-2.246a.678.678 0 0 0-.569-1.048a1.037 1.037 0 0 1-1.02-1.229l.145-.771a.403.403 0 0 0-.734-.294");
}
</style><g class="hntgybcog"><path class="hvf1rvi4c"/><path class="m3500wbus"/></g>`,
		"fallback": "uix:page-speed-score",
	});
}

export default Component;
