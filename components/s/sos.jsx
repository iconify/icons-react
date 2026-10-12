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
		"content": `<style>.bp_wdwbvh {
  d: path("M8 10.25C8 9.55 7.45 9 6.75 9s-1.25.55-1.25 1.25c0 1.75 2.5 1 2.5 3.25c0 .8-.55 1.5-1.25 1.5s-1.25-.6-1.25-1.25M12 9c.83 0 1.5 1.35 1.5 3s-.67 3-1.5 3s-1.5-1.35-1.5-3s.67-3 1.5-3m6.5 1.25c0-.7-.55-1.25-1.25-1.25S16 9.55 16 10.25c0 1.75 2.5 1 2.5 3.25c0 .8-.55 1.5-1.25 1.5S16 14.4 16 13.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p7ubt_b1z {
  width: 18.5px;
  height: 14px;
  x: 2.75px;
  y: 5px;
  rx: 7px;
}
</style><g class="hntgybcog"><rect class="p7ubt_b1z"/><path class="bp_wdwbvh"/></g>`,
		"fallback": "iconoven:sos",
	});
}

export default Component;
