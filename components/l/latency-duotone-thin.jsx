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

.qfcrftzhy {
  d: path("M4 3h16l-8 8 8 8H4l8 -8Z");
}

.unzah8ysn {
  fill: currentColor;
  d: path("M4 3h16l-8 8 8 8H4l8 -8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="unzah8ysn"/><path class="qfcrftzhy"/></g>`,
		"fallback": "iconmind:latency-duotone-thin",
	});
}

export default Component;
