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

.teqratbuh {
  width: 4px;
  height: 7.75px;
  x: 14.5px;
  y: 9.5px;
  rx: 0.75px;
}

.u842v2b0s {
  d: path("M5.75 9.75h5q.5 0 .5.5V12q0 .5-.5.5h-5q-.5 0-.5-.5v-1.75q0-.5.5-.5");
}

.ubpdmogjl {
  d: path("M2.75 20.25h18.5");
}

.zanw2p13y {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 6.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="zanw2p13y"/><path class="u842v2b0s"/><rect class="teqratbuh"/><path class="ubpdmogjl"/></g>`,
		"fallback": "iconoven:porta-cabin",
	});
}

export default Component;
