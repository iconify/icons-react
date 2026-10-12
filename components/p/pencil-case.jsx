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
		"content": `<style>.aa63mgb4a {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 9.25px;
  rx: 3.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ztpg_3b0w {
  d: path("M6.25 8.5v-2q0-.75.34-1.42l.82-1.66q.34-.67.68 0l.82 1.66q.34.67.34 1.42v2q0 .75-.75.75H7q-.75 0-.75-.75m-3.5 4.75h18.5m-5.5 0v3m-9.5-10.5h3");
}
</style><g class="hntgybcog"><rect class="aa63mgb4a"/><path class="ztpg_3b0w"/></g>`,
		"fallback": "iconoven:pencil-case",
	});
}

export default Component;
