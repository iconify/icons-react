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
		"content": `<style>.hcjpwwblz {
  cx: 9px;
  cy: 11px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgasd9bfr {
  d: path("M14.25 17h7");
}

.x-484gbyl {
  cx: 9px;
  cy: 11px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="x-484gbyl"/><path class="wgasd9bfr"/><circle class="hcjpwwblz"/></g>`,
		"fallback": "iconoven:insulation-roll",
	});
}

export default Component;
