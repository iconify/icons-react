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
		"content": `<style>.e3a4jwzia {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 6.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kn-efdc_v {
  d: path("M7.5 12h9m-7-2l-2 2l2 2m5-4l2 2l-2 2");
}
</style><g class="hntgybcog"><rect class="e3a4jwzia"/><path class="kn-efdc_v"/></g>`,
		"fallback": "iconoven:theater-mode",
	});
}

export default Component;
