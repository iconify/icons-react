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
		"content": `<style>.hvznq9bfo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M22 3h-4v5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iy0zj-beq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m_-1pbc9n {
  d: path("M22 3h-4v5h4");
}

.pdx7buv0t {
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
}

.pxt_uz9yx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 5.5h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.srcd877rx {
  d: path("M18 5.5h-3");
}
</style><g class="s0phu2bbs"><path class="iy0zj-beq"/><path class="hvznq9bfo"/><path class="pxt_uz9yx"/><path class="pdx7buv0t"/><path class="m_-1pbc9n"/><path class="srcd877rx"/></g>`,
		"fallback": "iconmind:temperature-check-duotone-bold",
	});
}

export default Component;
