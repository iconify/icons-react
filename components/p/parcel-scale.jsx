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
		"content": `<style>.ffpdfbcaf {
  d: path("M15.5 19H18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.posu3wcsk {
  d: path("M12 4v3m-7.25 7.5h14.5m-7.25 0v2.25");
}

.syhniepww {
  width: 10.5px;
  height: 8.25px;
  x: 6.75px;
  y: 4px;
  rx: 1.25px;
}

.xqp8acrww {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 16.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="syhniepww"/><path class="posu3wcsk"/><rect class="xqp8acrww"/><path class="ffpdfbcaf"/></g>`,
		"fallback": "iconoven:parcel-scale",
	});
}

export default Component;
