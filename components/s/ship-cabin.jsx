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
		"content": `<style>.a03kq1_oe {
  d: path("M2.75 6.5h18.5m-13.5 3h1v1h-1Zm4 0h1v1h-1Zm4 0h1v1h-1Zm-8.5 7.75V13.5h2v3.75m-6.5 0h18.5L19.5 20.4a1.5 1.5 0 0 1-1.31.85H5.81a1.5 1.5 0 0 1-1.31-.85Zm1.5 0h15.5");
}

.c2ppmhbzp {
  width: 15.5px;
  height: 10.75px;
  x: 4.25px;
  y: 6.5px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="c2ppmhbzp"/><path class="a03kq1_oe"/></g>`,
		"fallback": "iconoven:ship-cabin",
	});
}

export default Component;
