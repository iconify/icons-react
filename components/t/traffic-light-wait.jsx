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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0xhhrggo {
  d: path("M6 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.qoy9xab8s {
  fill: currentColor;
  d: path("M6 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.ry1sp5hjj {
  d: path("M7.375 2h.25A4.375 4.375 0 0 1 12 6.375v11.25A4.375 4.375 0 0 1 7.625 22h-.25A4.375 4.375 0 0 1 3 17.625V6.375A4.375 4.375 0 0 1 7.375 2");
}

.xglnp1d1i {
  d: path("M6 17.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8.75.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="ry1sp5hjj"/><path class="k0xhhrggo"/><path class="qoy9xab8s"/><path class="xglnp1d1i"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:traffic-light-wait",
	});
}

export default Component;
