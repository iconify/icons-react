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

.iji9_ofbs {
  d: path("M10.5 13h3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-5a1.5 1.5 0 0 1 1.5-1.5M9 13l6 8");
}

.v4u7r_b-f {
  d: path("M4.5 9v12h15V9");
}

.x9h11518n {
  d: path("m2.5 10.5l9.5-7l9.5 7");
}
</style><g class="hntgybcog"><path class="x9h11518n"/><path class="v4u7r_b-f"/><path class="iji9_ofbs"/></g>`,
		"fallback": "uix:potting-shed",
	});
}

export default Component;
