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
		"content": `<style>.e1d38004w {
  d: path("M2.75 20V9.75q0-1.25 1.09-1.87l7.07-4.01q1.09-.62 2.18 0l7.07 4.01q1.09.62 1.09 1.87V20q0 1.25-1.25 1.25H4q-1.25 0-1.25-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.snw7vthqs {
  width: 8px;
  height: 6.25px;
  x: 8px;
  y: 15px;
  rx: 1px;
}

.ta77t4buf {
  d: path("M5.75 21.25v-8.5a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v8.5");
}

.x-yph3b5e {
  d: path("M12 15v6.25M8 18h8");
}
</style><g class="hntgybcog"><path class="e1d38004w"/><path class="ta77t4buf"/><rect class="snw7vthqs"/><path class="x-yph3b5e"/></g>`,
		"fallback": "iconoven:warehouse",
	});
}

export default Component;
