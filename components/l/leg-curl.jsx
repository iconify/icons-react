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

.s4zf2ns9w {
  d: path("M4.25 7.5h10.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 14.75 11H4.25A1.75 1.75 0 0 1 2.5 9.25A1.75 1.75 0 0 1 4.25 7.5M5.5 11v9.5m8-9.5v9.5m6.5-17l-3.25 5.75L19 14");
}

.z_c61jp0l {
  d: path("M16.5 16.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="s4zf2ns9w"/><path class="z_c61jp0l"/></g>`,
		"fallback": "uix:leg-curl",
	});
}

export default Component;
