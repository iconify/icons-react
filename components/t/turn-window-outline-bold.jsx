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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.jtt8g10_o {
  d: path("M9 10h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="jtt8g10_o"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:turn-window-outline-bold",
	});
}

export default Component;
