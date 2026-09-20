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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tcu89np8z {
  d: path("m13.5 11 2.5 2.5 -2.5 2.5");
}

.yqc0twwou {
  d: path("M8 13.5h8");
}
</style><g class="hntgybcog"><path class="bn_pu6j-z"/><path class="yqc0twwou"/><path class="tcu89np8z"/></g>`,
		"fallback": "iconmind:right-to-portability-outline-thin",
	});
}

export default Component;
