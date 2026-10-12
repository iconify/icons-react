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

.img0046lo {
  width: 8.5px;
  height: 6.25px;
  x: 12.75px;
  y: 15px;
  rx: 1.5px;
}

.u9ifsz1za {
  d: path("M11.75 4h2a5 5 0 0 1 5 5v2.25M16.5 9l2.25 2.25L21 9");
}

.zah1fx37a {
  width: 7.25px;
  height: 12.5px;
  x: 2.75px;
  y: 8.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="zah1fx37a"/><rect class="img0046lo"/><path class="u9ifsz1za"/></g>`,
		"fallback": "iconoven:page-orientation",
	});
}

export default Component;
