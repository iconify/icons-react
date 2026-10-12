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
		"content": `<style>.gt7e-2bma {
  d: path("M12 13.25v8m-3.75 0h7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lbzev2qvn {
  d: path("M10.5 5.75v-2.5h3v2.5");
}

.puxxa7bfz {
  width: 16.5px;
  height: 3px;
  x: 3.75px;
  y: 10.25px;
  rx: 1.5px;
}

.yb5xu4r7k {
  width: 5.5px;
  height: 4.5px;
  x: 9.25px;
  y: 5.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="yb5xu4r7k"/><path class="lbzev2qvn"/><rect class="puxxa7bfz"/><path class="gt7e-2bma"/></g>`,
		"fallback": "iconoven:side-table",
	});
}

export default Component;
