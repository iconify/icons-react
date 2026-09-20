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
		"content": `<style>.aun8ln3zw {
  d: path("M12 12v7");
}

.fpxj5tbev {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 12v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lsaz73b_b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 8C7 6 5 6 3 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pg19afyuh {
  d: path("M9 8C7 6 5 6 3 7");
}

.q5bvrsi1m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 8c2 -2 4 -2 6 -1");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t6kwsvo7n {
  d: path("M15 8c2 -2 4 -2 6 -1");
}

.tbr--mb3k {
  fill: currentColor;
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="tbr--mb3k"/><path class="fpxj5tbev"/><path class="q5bvrsi1m"/><path class="lsaz73b_b"/><path class="aun8ln3zw"/><path class="xedmbxbzm"/><path class="t6kwsvo7n"/><path class="pg19afyuh"/></g>`,
		"fallback": "iconmind:sprinkler-duotone-regular",
	});
}

export default Component;
