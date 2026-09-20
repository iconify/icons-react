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
		"content": `<style>.a_gwgkc5a {
  d: path("m16 17 2 2 4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mzvcb5byi {
  d: path("m3 6 6 6 -6 6");
}

.z3zttqj_r {
  d: path("m10 6 6 6 -6 6");
}
</style><g class="hntgybcog"><path class="mzvcb5byi"/><path class="z3zttqj_r"/><path class="a_gwgkc5a"/></g>`,
		"fallback": "iconmind:speculative-decode-outline-thin",
	});
}

export default Component;
