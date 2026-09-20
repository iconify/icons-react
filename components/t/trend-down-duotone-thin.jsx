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
		"content": `<style>.f5y0d7xbc {
  d: path("M17 17h4v-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_b8y0_wc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 7 6 6 4 -4 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i3qzpz26g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 17h4v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pxhtn-byk {
  d: path("m3 7 6 6 4 -4 8 8");
}
</style><g class="hntgybcog"><path class="i_b8y0_wc"/><path class="i3qzpz26g"/><path class="pxhtn-byk"/><path class="f5y0d7xbc"/></g>`,
		"fallback": "iconmind:trend-down-duotone-thin",
	});
}

export default Component;
