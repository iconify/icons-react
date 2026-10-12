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
		"content": `<style>.ab03r-bgq {
  width: 4.5px;
  height: 7.25px;
  x: 2.75px;
  y: 14px;
  rx: 1.75px;
}

.fq271zpbr {
  d: path("M12 11.75q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t2zuj2b_z {
  d: path("M5 14v-2a7 7 0 0 1 14 0v2");
}

.vvl0lhbzh {
  width: 4.5px;
  height: 7.25px;
  x: 16.75px;
  y: 14px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="ab03r-bgq"/><rect class="vvl0lhbzh"/><path class="t2zuj2b_z"/><path class="fq271zpbr"/></g>`,
		"fallback": "iconoven:sensory",
	});
}

export default Component;
