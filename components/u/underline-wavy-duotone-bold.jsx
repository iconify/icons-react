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
		"content": `<style>.aqn8oeb4o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i80sg_6wn {
  d: path("m3 16 2.5 -2.5L8 16l2.5 -2.5L13 16l2.5 -2.5L18 16l2.5 -2.5");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.md2-5nb6k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 16 2.5 -2.5L8 16l2.5 -2.5L13 16l2.5 -2.5L18 16l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.oq71y_3bz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 9h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="aqn8oeb4o"/><path class="oq71y_3bz"/><path class="md2-5nb6k"/><path class="mg7aqnbsf"/><path class="j835zw5-z"/><path class="i80sg_6wn"/></g>`,
		"fallback": "iconmind:underline-wavy-duotone-bold",
	});
}

export default Component;
