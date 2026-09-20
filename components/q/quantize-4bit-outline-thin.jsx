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
		"content": `<style>.d-ycm7dex {
  d: path("m3 9 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tw1khnbtv {
  d: path("M3 21h5v-5h5v-5h5V6h3");
}
</style><g class="hntgybcog"><path class="d-ycm7dex"/><path class="tw1khnbtv"/></g>`,
		"fallback": "iconmind:quantize-4bit-outline-thin",
	});
}

export default Component;
