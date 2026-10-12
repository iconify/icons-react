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
		"content": `<style>.a7r3gub2f {
  width: 5px;
  height: 5.25px;
  x: 5.75px;
  y: 16px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mxstnobvd {
  d: path("M7 2.75h10m-5 0v3.5");
}

.szups_37t {
  cx: 12px;
  cy: 10px;
  r: 3.75px;
}

.tlf41qc1o {
  cx: 12px;
  cy: 10px;
  r: 1px;
}

.vvfvik0qh {
  d: path("M8.25 10v6m7.5-6v11.25");
}
</style><g class="hntgybcog"><path class="mxstnobvd"/><circle class="szups_37t"/><circle class="tlf41qc1o"/><path class="vvfvik0qh"/><rect class="a7r3gub2f"/></g>`,
		"fallback": "iconoven:lever",
	});
}

export default Component;
