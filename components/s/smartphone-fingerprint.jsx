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

.hq3kwqb_b {
  d: path("M10.5 10.5a1.5 1.5 0 0 1 3 0m-5 0V13m7-2.5V13M12 10.5v4");
}

.igxmsl8nr {
  d: path("M8.5 10.5a3.5 3.5 0 0 1 7 0");
}

.n-2uxvvgk {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5M10.5 18h3");
}
</style><g class="hntgybcog"><path class="n-2uxvvgk"/><path class="igxmsl8nr"/><path class="hq3kwqb_b"/></g>`,
		"fallback": "uix:smartphone-fingerprint",
	});
}

export default Component;
