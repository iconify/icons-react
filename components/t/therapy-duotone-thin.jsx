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
		"content": `<style>.fm7_cob8y {
  d: path("M5 17v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyl_gxxnb {
  d: path("M19 17v3");
}

.z0giekeys {
  d: path("M2 17V8h4v4h12V8h4v9Z");
}

.zod1g_eaq {
  fill: currentColor;
  d: path("M2 17V8h4v4h12V8h4v9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zod1g_eaq"/><path class="z0giekeys"/><path class="fm7_cob8y"/><path class="wyl_gxxnb"/></g>`,
		"fallback": "iconmind:therapy-duotone-thin",
	});
}

export default Component;
