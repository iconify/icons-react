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
		"content": `<style>.bij3zcbco {
  cx: 7.5px;
  cy: 12px;
  r: 2.5px;
}

.bvma_qtjv {
  d: path("M3.75 12H5m14 0h1.25M10 12h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfgecdbpk {
  cx: 16.5px;
  cy: 12px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="bvma_qtjv"/><circle class="bij3zcbco"/><circle class="xfgecdbpk"/></g>`,
		"fallback": "iconoven:slider-range",
	});
}

export default Component;
