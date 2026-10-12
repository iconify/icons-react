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
		"content": `<style>.e3r_wobic {
  width: 8.5px;
  height: 5.5px;
  x: 7.75px;
  y: 11.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix10u2bde {
  d: path("M13.25 14a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 1 1 2.5 0");
}

.yfgbpbbfd {
  d: path("M4.75 4.75H15.5q2 0 3.41 1.41l.93.93q1.41 1.41 1.41 3.41v6.75q0 2-2 2H4.75q-2 0-2-2V6.75q0-2 2-2m1.25 0v3m3-3v3m3-3v3");
}
</style><g class="hntgybcog"><path class="yfgbpbbfd"/><rect class="e3r_wobic"/><path class="ix10u2bde"/></g>`,
		"fallback": "iconoven:memory-card-camera",
	});
}

export default Component;
