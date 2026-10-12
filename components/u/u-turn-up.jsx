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

.zpotb2bui {
  d: path("M5.5 3.75v11a4.75 4.75 0 0 0 9.5 0V4.25");
}

.zun_w-eha {
  d: path("M11.5 7.5L15 4l3.5 3.5");
}
</style><g class="hntgybcog"><path class="zpotb2bui"/><path class="zun_w-eha"/></g>`,
		"fallback": "iconoven:u-turn-up",
	});
}

export default Component;
