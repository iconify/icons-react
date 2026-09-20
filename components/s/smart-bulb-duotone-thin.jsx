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

.p3mf_9b3b {
  fill: currentColor;
  d: path("M10 4c3.5 0 6 2.5 6 6 0 2.5 -2 4 -2 6H6c0 -2 -2 -3.5 -2 -6 0 -3.5 2.5 -6 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sy81gyprl {
  d: path("M7 19h6");
}

.ui5fkepez {
  d: path("M19 8c2 3 2 7 0 10");
}

.z-xj_vb1j {
  d: path("M10 4c3.5 0 6 2.5 6 6 0 2.5 -2 4 -2 6H6c0 -2 -2 -3.5 -2 -6 0 -3.5 2.5 -6 6 -6");
}
</style><g class="hntgybcog"><path class="p3mf_9b3b"/><path class="z-xj_vb1j"/><path class="sy81gyprl"/><path class="ui5fkepez"/></g>`,
		"fallback": "iconmind:smart-bulb-duotone-thin",
	});
}

export default Component;
