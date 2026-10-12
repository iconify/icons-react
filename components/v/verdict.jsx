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
		"content": `<style>.cv1vf4dwp {
  d: path("M6 7h6m-6 3.25h4m-4 7.5h4.5m7.84-3.35l1.06-1.06q.53-.53 0-1.06L16.22 9.1q-.53-.53-1.06 0l-1.06 1.06q-.53.53 0 1.06l3.18 3.18q.53.53 1.06 0m-.14-4.1l2.55-2.55");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1xjxybqc {
  width: 12.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="n1xjxybqc"/><path class="cv1vf4dwp"/></g>`,
		"fallback": "iconoven:verdict",
	});
}

export default Component;
