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

.lv9esmbjh {
  width: 11.5px;
  height: 18.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 2px;
}

.szuusdkbs {
  d: path("M6.25 5.75h11.5M8.5 8.5l1 4h5l1-4m-6 1.5c.85-.6 1.65.6 2.5 0s1.65.6 2.5 0M12 14.25l3 4.5H9Z");
}
</style><g class="hntgybcog"><rect class="lv9esmbjh"/><path class="szuusdkbs"/></g>`,
		"fallback": "iconoven:laundry-tag",
	});
}

export default Component;
