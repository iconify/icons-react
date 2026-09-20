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
		"content": `<style>.c8e13sbqx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 9 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d-ycm7dex {
  d: path("m3 9 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkh8z5-ob {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21h5v-5h5v-5h5V6h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tw1khnbtv {
  d: path("M3 21h5v-5h5v-5h5V6h3");
}
</style><g class="hntgybcog"><path class="c8e13sbqx"/><path class="jkh8z5-ob"/><path class="d-ycm7dex"/><path class="tw1khnbtv"/></g>`,
		"fallback": "iconmind:quantize-4bit-duotone-thin",
	});
}

export default Component;
