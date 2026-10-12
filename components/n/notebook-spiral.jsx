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

.koe0v2buf {
  width: 16.5px;
  height: 16px;
  x: 3.75px;
  y: 5.25px;
  rx: 2.5px;
}

.l6pve5b1k {
  d: path("M7.5 2.75v4.5m3-4.5v4.5m3-4.5v4.5m3-4.5v4.5m-8.75 4.5h8.5m-8.5 4h5.5");
}
</style><g class="hntgybcog"><rect class="koe0v2buf"/><path class="l6pve5b1k"/></g>`,
		"fallback": "iconoven:notebook-spiral",
	});
}

export default Component;
