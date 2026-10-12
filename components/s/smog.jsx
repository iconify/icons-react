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
		"content": `<style>.dqmilfbta {
  d: path("M5.06 9.84a2.29 2.29 0 0 1-.32-4.56a3.29 3.29 0 0 1 6.11-.8a2.58 2.58 0 0 1-.35 5.36ZM10.25 14q1.38-1.25 2.75 0t2.75 0t2.75 0t2.75 0m-11 3.5q1.38-1.25 2.75 0t2.75 0t2.75 0t2.75 0m-11 3q1.38-1.25 2.75 0t2.75 0t2.75 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q2p17qb5i {
  width: 3.5px;
  height: 8.25px;
  x: 4px;
  y: 13px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="q2p17qb5i"/><path class="dqmilfbta"/></g>`,
		"fallback": "iconoven:smog",
	});
}

export default Component;
