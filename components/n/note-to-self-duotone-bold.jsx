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
		"content": `<style>.a4ntl3b-i {
  fill: currentColor;
  d: path("M10 9.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.r5bn6xbek {
  d: path("m9.5 11 2.5 2.5 2.5 -2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t5v_djbzx {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xrw775b-m {
  d: path("M10 9.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="s0phu2bbs"><path class="t5v_djbzx"/><path class="a4ntl3b-i"/><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="xrw775b-m"/><path class="r5bn6xbek"/></g>`,
		"fallback": "iconmind:note-to-self-duotone-bold",
	});
}

export default Component;
