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

.m__vw4oyn {
  d: path("m12 11 2.5 2.5L12 16");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}

.z0uajmpfu {
  d: path("M9 8v5.5h5.5");
}
</style><g class="hntgybcog"><path class="ymp2b4b6u"/><path class="z0uajmpfu"/><path class="m__vw4oyn"/></g>`,
		"fallback": "iconmind:responsible-disclosure-outline-thin",
	});
}

export default Component;
