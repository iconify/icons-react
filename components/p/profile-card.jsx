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

.nwgaeub8v {
  d: path("M13 12.75h4.5M6 16.5h12");
}

.ozmcgbndl {
  cx: 8px;
  cy: 10.25px;
  r: 3px;
}

.phjvadcnz {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 3px;
}

.xb-_hll7y {
  d: path("M12.5 9.5h8.75");
}
</style><g class="hntgybcog"><rect class="phjvadcnz"/><path class="xb-_hll7y"/><circle class="ozmcgbndl"/><path class="nwgaeub8v"/></g>`,
		"fallback": "iconoven:profile-card",
	});
}

export default Component;
