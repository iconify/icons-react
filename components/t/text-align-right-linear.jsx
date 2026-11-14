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

.lxaxfex0h {
  d: path("M10 18H19");
}

.nh4_ot8ve {
  d: path("M10 10H19");
}

.y8rchkbuh {
  d: path("M5 6H19");
}

.zvlywgbxr {
  d: path("M5 14H19");
}
</style><g class="hntgybcog"><path class="y8rchkbuh"/><path class="nh4_ot8ve"/><path class="zvlywgbxr"/><path class="lxaxfex0h"/></g>`,
		"fallback": "solar:text-align-right-linear",
	});
}

export default Component;
