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
		"content": `<style>.a20judcsg {
  d: path("m10.5 10.5 3 3");
}

.e9i5dwbzy {
  d: path("m10.5 13.5 3 -3");
}

.kj_xiu02e {
  d: path("m12 4 8 8 -8 8 -8 -8Z");
}

.oy5p0_yoh {
  fill: currentColor;
  d: path("m12 4 8 8 -8 8 -8 -8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="oy5p0_yoh"/><path class="kj_xiu02e"/><path class="a20judcsg"/><path class="e9i5dwbzy"/></g>`,
		"fallback": "iconmind:mutant-kill-duotone-bold",
	});
}

export default Component;
