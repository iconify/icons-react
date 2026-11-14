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
		"content": `<style>.f-grcgbqq {
  d: path("m3 20l9-15l9 15Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zkj703b-d {
  d: path("m8 12.5l2 1.5l2-2l2 2l2-1.5m-10-6h.01M18 6.5h.01");
}
</style><g class="hntgybcog"><path class="f-grcgbqq"/><path class="zkj703b-d"/></g>`,
		"fallback": "uix:snowy-mountain",
	});
}

export default Component;
