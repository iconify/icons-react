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
		"content": `<style>.e0fatccfd {
  d: path("M18 12h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlpxneb5g {
  d: path("M9 8v8");
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.wn519caci {
  d: path("m19 9 3 3 -3 3");
}

.x7aiqk4zc {
  d: path("M2 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}
</style><g class="hntgybcog"><path class="x7aiqk4zc"/><path class="jlpxneb5g"/><path class="wg8_ddc1f"/><path class="e0fatccfd"/><path class="wn519caci"/></g>`,
		"fallback": "iconmind:spend-outline-thin",
	});
}

export default Component;
