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

.ih_hzbmoj {
  d: path("M4 20v-8h16v8Zm8 -8v8m-4 -8V4h8v8");
}

.r00g59dot {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20v-8h16v8Zm8 -8v8m-4 -8V4h8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="r00g59dot"/><path class="ih_hzbmoj"/></g>`,
		"fallback": "iconmind:inventory-count-duotone-thin",
	});
}

export default Component;
