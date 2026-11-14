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
		"content": `<style>.cwdtztbzg {
  d: path("M5 6.75V21.5h14V6.75m-14 5h14M5 16.5h14M8.5 9.25h.01m6.99 0h.01m-7.01 5h.01m6.99 0h.01M8.5 19h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lribtcbfp {
  d: path("M11 21.5v-2.75h2v2.75m2.5-2.5h.01");
}

.vvn1sznwd {
  d: path("m3.5 7.5l8.5-5l8.5 5");
}
</style><g class="hntgybcog"><path class="vvn1sznwd"/><path class="cwdtztbzg"/><path class="lribtcbfp"/></g>`,
		"fallback": "uix:triplex",
	});
}

export default Component;
