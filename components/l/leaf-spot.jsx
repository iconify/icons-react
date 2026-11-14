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

.hufyo_fte {
  d: path("M5 19c0-9 5-14.5 15.5-15.5C19.5 14 14 19 5 19m0 0l-2.5 2.5");
}

.knutw4vyw {
  d: path("M7.25 15.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7-7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-2 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="hufyo_fte"/><path class="knutw4vyw"/></g>`,
		"fallback": "uix:leaf-spot",
	});
}

export default Component;
