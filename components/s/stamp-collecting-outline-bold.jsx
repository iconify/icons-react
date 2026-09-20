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
		"content": `<style>.ak36m6b8g {
  d: path("M4 5h16v14H4Zm0 0");
}

.elm0fn4gd {
  d: path("M19 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.f4nuxtbsp {
  d: path("M8 9h8v6H8Z");
}

.o9j8_ob8u {
  d: path("M3 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ozywi-m1p {
  d: path("M3 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ak36m6b8g"/><path class="f4nuxtbsp"/><path class="o9j8_ob8u"/><path class="ozywi-m1p"/><path class="elm0fn4gd"/></g>`,
		"fallback": "iconmind:stamp-collecting-outline-bold",
	});
}

export default Component;
