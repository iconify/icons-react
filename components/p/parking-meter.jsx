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

.m3i8hg_zf {
  d: path("M9 8.5a3 3 0 0 1 6 0m-3 0L13.5 7M12 12.75v8.5m-3 0h6");
}

.mkottk0cv {
  width: 10.5px;
  height: 10px;
  x: 6.75px;
  y: 2.75px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><rect class="mkottk0cv"/><path class="m3i8hg_zf"/></g>`,
		"fallback": "iconoven:parking-meter",
	});
}

export default Component;
