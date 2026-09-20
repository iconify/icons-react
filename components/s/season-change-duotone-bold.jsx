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
		"content": `<style>.g45hqpb0s {
  d: path("M10.5 12h3");
}

.l90ci7bpu {
  d: path("m12 9.5 2.5 2.5 -2.5 2.5");
}

.pbw6via8w {
  fill: currentColor;
  d: path("M2 16c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.phjqq0bfl {
  d: path("M2 16c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.pyq-q6b7b {
  d: path("M18 8v8m-4 0 8 -8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pbw6via8w"/><path class="phjqq0bfl"/><path class="pyq-q6b7b"/><path class="g45hqpb0s"/><path class="l90ci7bpu"/></g>`,
		"fallback": "iconmind:season-change-duotone-bold",
	});
}

export default Component;
