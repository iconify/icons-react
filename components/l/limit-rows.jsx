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
		"content": `<style>.d_newem_b {
  d: path("M3 19.5h3.5m3 0h5m3 0H21");
}

.f_o0ody8q {
  fill: currentColor;
  d: path("M3.25 12h17.5A1.25 1.25 0 0 1 22 13.25a1.25 1.25 0 0 1-1.25 1.25H3.25A1.25 1.25 0 0 1 2 13.25A1.25 1.25 0 0 1 3.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ufkw6fvrl {
  d: path("M3 3.5h18M3 8h18");
}
</style><g class="hntgybcog"><path class="ufkw6fvrl"/><path class="f_o0ody8q"/><path class="d_newem_b"/></g>`,
		"fallback": "uix:limit-rows",
	});
}

export default Component;
