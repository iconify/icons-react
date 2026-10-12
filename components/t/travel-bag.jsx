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
		"content": `<style>.cvenlqlru {
  d: path("M7.25 9.5v10m9.5-10v10m-7.25-7h5");
}

.e9e3_hbwn {
  d: path("M8.5 9c0-4.5 7-4.5 7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngrjfrbtj {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 9px;
  rx: 5px;
}
</style><g class="hntgybcog"><path class="e9e3_hbwn"/><rect class="ngrjfrbtj"/><path class="cvenlqlru"/></g>`,
		"fallback": "iconoven:travel-bag",
	});
}

export default Component;
