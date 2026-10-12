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
		"content": `<style>.ebb4xebha {
  d: path("M2.75 8.75h4m10.5 2h4");
}

.eqqpn2b9x {
  width: 4px;
  height: 14.5px;
  x: 17.25px;
  y: 6.75px;
  rx: 1.25px;
}

.f1hwpkhfy {
  width: 4.5px;
  height: 18.5px;
  x: 9.75px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ph_qpubce {
  width: 4px;
  height: 16.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="ph_qpubce"/><rect class="f1hwpkhfy"/><rect class="eqqpn2b9x"/><path class="ebb4xebha"/></g>`,
		"fallback": "iconoven:library",
	});
}

export default Component;
