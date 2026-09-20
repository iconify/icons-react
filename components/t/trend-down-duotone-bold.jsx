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
		"content": `<style>.f5y0d7xbc {
  d: path("M17 17h4v-4");
}

.l_bz9jb0c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 17h4v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pxhtn-byk {
  d: path("m3 7 6 6 4 -4 8 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yd8f2vbnr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 7 6 6 4 -4 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yd8f2vbnr"/><path class="l_bz9jb0c"/><path class="pxhtn-byk"/><path class="f5y0d7xbc"/></g>`,
		"fallback": "iconmind:trend-down-duotone-bold",
	});
}

export default Component;
