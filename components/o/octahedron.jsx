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
		"content": `<style>.d6qn0tbqp {
  d: path("m12 4l-.5 9l.5 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3q3-os0w {
  d: path("m6.25 12.05l5.25.95l6.5-1.15");
}

.u4jsydbbw {
  d: path("m12.87 3.4l7.01 7.2q.87.9.05 1.84l-7.11 8.12q-.82.94-1.64 0l-7.11-8.12q-.82-.94.05-1.84l7.01-7.2q.87-.9 1.74 0");
}
</style><g class="hntgybcog"><path class="u4jsydbbw"/><path class="d6qn0tbqp"/><path class="n3q3-os0w"/></g>`,
		"fallback": "iconoven:octahedron",
	});
}

export default Component;
