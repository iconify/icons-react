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
		"content": `<style>.dn1egm5la {
  d: path("m10 17 6 -6 6 6");
}

.e84dr_enj {
  d: path("m2 7 6 6 6 -6");
}

.mns5e-byx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 17 6 -6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.njo8k45tq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m2 7 6 6 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp3wfdbxm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 21h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="njo8k45tq"/><path class="mns5e-byx"/><path class="tp3wfdbxm"/><path class="e84dr_enj"/><path class="dn1egm5la"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:valley-duotone-bold",
	});
}

export default Component;
