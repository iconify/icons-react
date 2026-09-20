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
		"content": `<style>.agve3ib4g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 13 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.e-n_8dpfy {
  d: path("m9 13 2 -2");
}

.gjrqt49vu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 15 5 -5 5 5 5 -5 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gpip01bqy {
  d: path("m3 15 5 -5 5 5 5 -5 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xa9vorq4l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="gjrqt49vu"/><path class="xa9vorq4l"/><path class="agve3ib4g"/><path class="gpip01bqy"/><path class="bod4n0b3z"/><path class="e-n_8dpfy"/></g>`,
		"fallback": "iconmind:landfill-duotone-bold",
	});
}

export default Component;
