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

.kf09lihqj {
  d: path("M5.75 12c2.75 3 9.75 3 12.5 0c-2.75-2-9.75-2-12.5 0");
}

.p9tq0zrti {
  d: path("M7.5 19.75a9 9 0 1 1 9 0");
}

.u-ec9j55s {
  d: path("m17.25 16.75l-.75 3l3 .75");
}
</style><g class="hntgybcog"><path class="kf09lihqj"/><path class="p9tq0zrti"/><path class="u-ec9j55s"/></g>`,
		"fallback": "uix:kayak-roll",
	});
}

export default Component;
