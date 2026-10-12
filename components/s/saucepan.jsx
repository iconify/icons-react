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
		"content": `<style>.al80ij1va {
  width: 12px;
  height: 12.75px;
  x: 2.75px;
  y: 8.5px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wv8fhiw3l {
  d: path("M2.75 12h12m0-.5h6.5");
}
</style><g class="hntgybcog"><rect class="al80ij1va"/><path class="wv8fhiw3l"/></g>`,
		"fallback": "iconoven:saucepan",
	});
}

export default Component;
