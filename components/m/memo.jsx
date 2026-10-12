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
		"content": `<style>.apefn63ak {
  width: 9.5px;
  height: 3px;
  x: 7.25px;
  y: 5.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sgx2gq49z {
  d: path("M14.5 21v-3.5A1.5 1.5 0 0 1 16 16h3.5");
}

.sw1qdkbof {
  d: path("M7.25 12h9.5m-9.5 3.25h4.5");
}

.v-ir9qmkk {
  d: path("M5.75 2.75h12.5a1.5 1.5 0 0 1 1.5 1.5V16l-5.25 5.25H5.75a1.5 1.5 0 0 1-1.5-1.5V4.25a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="v-ir9qmkk"/><path class="sgx2gq49z"/><rect class="apefn63ak"/><path class="sw1qdkbof"/></g>`,
		"fallback": "iconoven:memo",
	});
}

export default Component;
