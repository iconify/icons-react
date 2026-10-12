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
		"content": `<style>.ecd6pyxgc {
  d: path("m12.47 3.22l5.01 1.82q.47.17.72.61l2.66 4.61q.25.43.16.93l-.92 5.24q-.09.49-.47.82l-4.08 3.42q-.39.32-.89.32H9.34q-.5 0-.89-.32l-4.08-3.42q-.38-.32-.47-.82l-.92-5.24q-.09-.5.16-.93L5.8 5.65q.25-.44.72-.61l5.01-1.82q.47-.17.94 0");
}

.f7kpl9b3c {
  d: path("M14.25 10.5a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 1 1 4.5 0V13c0 2-1.25 3.25-3.25 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ecd6pyxgc"/><path class="f7kpl9b3c"/></g>`,
		"fallback": "iconoven:nonagon",
	});
}

export default Component;
