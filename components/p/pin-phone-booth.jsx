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

.oiw--7_vw {
  d: path("M5.5 5L7 2.5h10L18.5 5M7.25 5h9.5a1.75 1.75 0 0 1 1.75 1.75v13a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-13A1.75 1.75 0 0 1 7.25 5");
}

.zdv144b4h {
  d: path("M8.5 11.5V10c0-1.25 1.5-2 3.5-2s3.5.75 3.5 2v1.5h-2v-1.25h-3v1.25Zm-3 3h13m-6.5 0v7");
}
</style><g class="hntgybcog"><path class="oiw--7_vw"/><path class="zdv144b4h"/></g>`,
		"fallback": "uix:pin-phone-booth",
	});
}

export default Component;
