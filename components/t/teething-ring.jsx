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
		"content": `<style>.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jvsm0_ljk {
  cx: 6.85px;
  cy: 6.85px;
  r: 1.5px;
}

.lgmq2ebgl {
  cx: 17.15px;
  cy: 17.15px;
  r: 1.5px;
}

.m7_yedtmn {
  cx: 6.85px;
  cy: 17.15px;
  r: 1.5px;
}

.peqyckbty {
  cx: 17.15px;
  cy: 6.85px;
  r: 1.5px;
}

.v90gbqbox {
  cx: 12px;
  cy: 12px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="v90gbqbox"/><circle class="gp0egaclj"/><circle class="peqyckbty"/><circle class="m7_yedtmn"/><circle class="jvsm0_ljk"/><circle class="lgmq2ebgl"/></g>`,
		"fallback": "iconoven:teething-ring",
	});
}

export default Component;
