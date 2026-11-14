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
		"content": `<style>.hjlwxw-8f {
  d: path("M11.5 5.5h1a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 12.5 11h-1a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 11.5 5.5m.5-3v3m-2-3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq2bb9bpy {
  d: path("M2.5 8L4 11v10.5h16V11l1.5-3M4 11h16");
}
</style><g class="hntgybcog"><path class="vq2bb9bpy"/><path class="hjlwxw-8f"/></g>`,
		"fallback": "uix:vaccine-box",
	});
}

export default Component;
