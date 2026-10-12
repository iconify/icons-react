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
		"content": `<style>.c2vbuccni {
  cx: 12px;
  cy: 10.5px;
  r: 3.5px;
}

.dfcfuobnq {
  width: 18.5px;
  height: 15px;
  x: 2.75px;
  y: 3px;
  rx: 3px;
}

.hdj66lbws {
  d: path("M6 21.25h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="dfcfuobnq"/><circle class="c2vbuccni"/><path class="hdj66lbws"/></g>`,
		"fallback": "iconoven:mri-scanner",
	});
}

export default Component;
