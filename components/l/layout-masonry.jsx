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
		"content": `<style>.ayo9k_bwn {
  width: 7.75px;
  height: 10.5px;
  x: 13.5px;
  y: 10.75px;
  rx: 2px;
}

.bvp3hnb7f {
  width: 7.75px;
  height: 10.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9yczbbvh {
  width: 7.75px;
  height: 5px;
  x: 13.5px;
  y: 2.75px;
  rx: 2px;
}

.p268vfc6t {
  width: 7.75px;
  height: 5px;
  x: 2.75px;
  y: 16.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="bvp3hnb7f"/><rect class="p268vfc6t"/><rect class="l9yczbbvh"/><rect class="ayo9k_bwn"/></g>`,
		"fallback": "iconoven:layout-masonry",
	});
}

export default Component;
