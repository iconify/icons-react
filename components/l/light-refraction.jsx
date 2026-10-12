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
		"content": `<style>.h438ckbje {
  d: path("M12 3v4.5m-7.5-3L12 12m0 0l2.25 6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zcp8fb90b {
  width: 18.5px;
  height: 9.25px;
  x: 2.75px;
  y: 12px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="zcp8fb90b"/><path class="h438ckbje"/></g>`,
		"fallback": "iconoven:light-refraction",
	});
}

export default Component;
