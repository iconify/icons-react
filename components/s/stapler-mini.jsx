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
		"content": `<style>.gzjv-ukxe {
  width: 16.5px;
  height: 4.5px;
  x: 3.75px;
  y: 14.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rhml0w0_u {
  d: path("M6.5 6.75h9q1.75 0 2.72 1.46l.06.08q.97 1.46.97 2.46t-1.75 1h-11q-1.75 0-1.75-1.75V8.5q0-1.75 1.75-1.75m.5 5v3");
}
</style><g class="hntgybcog"><path class="rhml0w0_u"/><rect class="gzjv-ukxe"/></g>`,
		"fallback": "iconoven:stapler-mini",
	});
}

export default Component;
