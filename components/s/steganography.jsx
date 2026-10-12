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

.jzhurcr0v {
  d: path("m12.25 7.25l3 2.25l3-2.25");
}

.te3hz_xpy {
  d: path("m2.75 17.5l4.75-4.75l5.5 5.5");
}

.xu36mfbrq {
  width: 6.5px;
  height: 5px;
  x: 12px;
  y: 6.75px;
  rx: 1px;
}

.zyt56mbrm {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="zyt56mbrm"/><path class="te3hz_xpy"/><rect class="xu36mfbrq"/><path class="jzhurcr0v"/></g>`,
		"fallback": "iconoven:steganography",
	});
}

export default Component;
