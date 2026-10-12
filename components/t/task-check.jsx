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
		"content": `<style>.avkaiu95r {
  d: path("M12.5 17h8.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvihphbai {
  width: 6.5px;
  height: 6.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 1.5px;
}

.r3cna8b3a {
  width: 6.5px;
  height: 6.5px;
  x: 2.75px;
  y: 13.75px;
  rx: 1.5px;
}

.s1kkv3b4l {
  d: path("m4.5 7l1.25 1.25l2-2.25m4.75 1h8.75");
}
</style><g class="hntgybcog"><rect class="mvihphbai"/><path class="s1kkv3b4l"/><rect class="r3cna8b3a"/><path class="avkaiu95r"/></g>`,
		"fallback": "iconoven:task-check",
	});
}

export default Component;
