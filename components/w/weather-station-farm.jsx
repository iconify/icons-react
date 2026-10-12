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

.i9v4e1r8y {
  cx: 5px;
  cy: 6px;
  r: 2.25px;
}

.ispxgzbeo {
  cx: 19px;
  cy: 6px;
  r: 2.25px;
}

.iu6zz442a {
  d: path("M12 21.25V6M6.5 6h11M8 21.25h8");
}

.nx0ee9b7r {
  width: 7px;
  height: 5.5px;
  x: 8.5px;
  y: 11px;
  rx: 1px;
}

.prqv4c02l {
  d: path("M8.5 13.75h7");
}
</style><g class="hntgybcog"><path class="iu6zz442a"/><circle class="i9v4e1r8y"/><circle class="ispxgzbeo"/><rect class="nx0ee9b7r"/><path class="prqv4c02l"/></g>`,
		"fallback": "iconoven:weather-station-farm",
	});
}

export default Component;
