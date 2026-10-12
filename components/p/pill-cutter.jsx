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
		"content": `<style>.a83s16bte {
  d: path("M12 14.75v3.75");
}

.d4fhxdbfu {
  width: 18.5px;
  height: 8.25px;
  x: 2.75px;
  y: 12.5px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q52cjmb4y {
  width: 6.5px;
  height: 3.75px;
  x: 8.75px;
  y: 14.75px;
  rx: 1.75px;
}

.x3-74l2ee {
  d: path("M20.28 10.02L4.22 6.23Q3.25 6 3.25 5V4q0-1 .97-.77l16.06 3.79q.97.23.97 1.23v1q0 1-.97.77");
}
</style><g class="hntgybcog"><path class="x3-74l2ee"/><rect class="d4fhxdbfu"/><rect class="q52cjmb4y"/><path class="a83s16bte"/></g>`,
		"fallback": "iconoven:pill-cutter",
	});
}

export default Component;
