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
		"content": `<style>.fw2qxabom {
  d: path("M4 21V11a8 8 0 0 1 16 0v10Z");
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.n1_x32bvh {
  fill: currentColor;
  d: path("M4 21V11a8 8 0 0 1 16 0v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s6lrl6bmb {
  d: path("M9 4v3");
}

.xwfp38btc {
  d: path("M15 4v3");
}
</style><g class="nrj6p8qat"><path class="n1_x32bvh"/><path class="fw2qxabom"/><path class="m-p3hbclp"/><path class="s6lrl6bmb"/><path class="xwfp38btc"/></g>`,
		"fallback": "iconmind:school-bag-duotone-regular",
	});
}

export default Component;
