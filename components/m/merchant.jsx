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
		"content": `<style>.hfzbaxf9c {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlx1r_bht {
  d: path("M8.5 21v-6.5h4V21");
}

.zfxkkhcbv {
  d: path("M5.5 8.5V21h13V8.5");
}
</style><g class="hntgybcog"><path class="hfzbaxf9c"/><path class="zfxkkhcbv"/><path class="xlx1r_bht"/></g>`,
		"fallback": "uix:merchant",
	});
}

export default Component;
