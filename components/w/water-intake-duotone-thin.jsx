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

.n2grxe-3y {
  fill: currentColor;
  d: path("M12 2.5 15.5 6a3.5 3.5 0 1 1 -7 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t03dwshwl {
  d: path("M7 11v6l3 3h4l3 -3v-6");
}

.ywohddcxs {
  d: path("M12 2.5 15.5 6a3.5 3.5 0 1 1 -7 0Z");
}
</style><g class="hntgybcog"><path class="n2grxe-3y"/><path class="t03dwshwl"/><path class="ywohddcxs"/></g>`,
		"fallback": "iconmind:water-intake-duotone-thin",
	});
}

export default Component;
