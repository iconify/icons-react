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
		"content": `<style>.bgtqag34q {
  d: path("M2 21a8 8 0 0 1 16 0");
}

.ixfqlr8_d {
  d: path("M7 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.jc4egvb_a {
  d: path("M16 9h4v7h-4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ixfqlr8_d"/><path class="bgtqag34q"/><path class="jc4egvb_a"/></g>`,
		"fallback": "iconmind:solo-travel-outline-bold",
	});
}

export default Component;
