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
		"content": `<style>.eoc2hkblr {
  d: path("M12.125 9.5h3.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 9.5 12.875v-.75A2.625 2.625 0 0 1 12.125 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjsqoxwmr {
  fill: currentColor;
  d: path("M14 12.5h.01");
}

.te8u6xnly {
  d: path("M3.5 21.5h5m-2.5 0V7a4 4 0 0 1 4-4h3m1.566 0h3.868a.93.93 0 0 1 .816 1.375l-.324.593a1.5 1.5 0 0 1-1.316.782h-2.22a1.5 1.5 0 0 1-1.316-.782l-.324-.593A.93.93 0 0 1 14.566 3M6 12.5h3.5");
}
</style><g class="hntgybcog"><path class="te8u6xnly"/><path class="eoc2hkblr"/><path class="mjsqoxwmr"/></g>`,
		"fallback": "uix:street-light-camera",
	});
}

export default Component;
