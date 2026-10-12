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

.qyjnv-bnb {
  d: path("M12 4.75v3.5m0 7.5v3.5M5.75 12h4M8 10l2 2l-2 2m10.25-2h-4M16 10l-2 2l2 2");
}

.qzkvbx_uy {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="qzkvbx_uy"/><path class="qyjnv-bnb"/></g>`,
		"fallback": "iconoven:merge-cells",
	});
}

export default Component;
