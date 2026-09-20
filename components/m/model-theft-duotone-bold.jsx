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
		"content": `<style>.cqvf5hngw {
  fill: currentColor;
  d: path("M10.5 7H13a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-4l3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e-2lvb01c {
  d: path("M10.5 7H13a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-4l3 -3h2.5");
}

.j4csr4mvr {
  d: path("M19.5 9.5 22 12l-2.5 2.5");
}

.jaf3fnb5e {
  d: path("M17.5 12H20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="cqvf5hngw"/><path class="e-2lvb01c"/><path class="jaf3fnb5e"/><path class="j4csr4mvr"/></g>`,
		"fallback": "iconmind:model-theft-duotone-bold",
	});
}

export default Component;
