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

.kny_pabcv {
  d: path("M13 11.25V9");
}

.kprwtsbgu {
  d: path("M6.5 18.5v2m11-2v2M5.5 7v1.75m0 4.75v1.75");
}

.nl8hhdbnn {
  width: 18.5px;
  height: 14.75px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.uvig46c8n {
  cx: 13px;
  cy: 11.25px;
  r: 3.5px;
}
</style><g class="hntgybcog"><rect class="nl8hhdbnn"/><path class="kprwtsbgu"/><circle class="uvig46c8n"/><path class="kny_pabcv"/></g>`,
		"fallback": "iconoven:safe-box",
	});
}

export default Component;
