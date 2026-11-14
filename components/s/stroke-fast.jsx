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

.ign53nbdu {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m6.25-2.5h.01m6.49 0h.01");
}

.kv6h5do3d {
  d: path("M7.75 14.75H12l3.75 2.5");
}
</style><g class="hntgybcog"><path class="ign53nbdu"/><path class="kv6h5do3d"/></g>`,
		"fallback": "uix:stroke-fast",
	});
}

export default Component;
