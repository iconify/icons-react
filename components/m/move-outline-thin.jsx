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
		"content": `<style>.cu_n5qbwp {
  d: path("m7 9 -3 3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.qrqk-5btd {
  d: path("m9 17 3 3 3 -3");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.t407nkbfi {
  d: path("m9 7 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="r7xk8o29f"/><path class="sxlwlmkmh"/><path class="t407nkbfi"/><path class="qrqk-5btd"/><path class="cu_n5qbwp"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:move-outline-thin",
	});
}

export default Component;
