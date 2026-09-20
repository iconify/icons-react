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
		"content": `<style>.ckawxab4i {
  d: path("m4 11 8 -8 8 8");
}

.egu9ezovw {
  d: path("m4 20 8 -8 8 8");
}

.i4oyae51y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 20 8 -8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.teqd5v2_o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 11 8 -8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="teqd5v2_o"/><path class="i4oyae51y"/><path class="ckawxab4i"/><path class="egu9ezovw"/></g>`,
		"fallback": "iconmind:priority-duotone-bold",
	});
}

export default Component;
