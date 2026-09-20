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
		"content": `<style>.gy18-zqeb {
  d: path("M14 19h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kz82t0nla {
  d: path("M14 15h7");
}

.l3yb7ybjz {
  d: path("M2 9h6");
}

.rl0mwnbkl {
  fill: currentColor;
  d: path("m12 5 7 7H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sojjg40ea {
  d: path("m12 5 7 7H5Z");
}
</style><g class="hntgybcog"><path class="rl0mwnbkl"/><path class="sojjg40ea"/><path class="l3yb7ybjz"/><path class="kz82t0nla"/><path class="gy18-zqeb"/></g>`,
		"fallback": "iconmind:prism-duotone-thin",
	});
}

export default Component;
