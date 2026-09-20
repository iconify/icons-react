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
		"content": `<style>.d269etb2f {
  d: path("M6 3v14h10V3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iu1vklb-k {
  d: path("M9 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rrvudvrpy {
  d: path("m16 15 4 4v3");
}
</style><g class="hntgybcog"><path class="d269etb2f"/><path class="iu1vklb-k"/><path class="rrvudvrpy"/></g>`,
		"fallback": "iconmind:selfie-outline-thin",
	});
}

export default Component;
