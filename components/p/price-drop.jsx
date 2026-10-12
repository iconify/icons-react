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

.os5mt0akv {
  d: path("M5.75 12.75h3m-3 3.5h3m8.5-12.5v16.5m-3.5-3.5l3.5 3.5l3.5-3.5");
}

.wykxeebol {
  cx: 7.25px;
  cy: 7.75px;
  r: 1.25px;
}

.z1dep4bpm {
  d: path("m3.63 6.62l2.74-2.74q.88-.88 1.76 0l2.74 2.74q.88.88.88 2.13V20q0 1.25-1.25 1.25H4q-1.25 0-1.25-1.25V8.75q0-1.25.88-2.13");
}
</style><g class="hntgybcog"><path class="z1dep4bpm"/><circle class="wykxeebol"/><path class="os5mt0akv"/></g>`,
		"fallback": "iconoven:price-drop",
	});
}

export default Component;
