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
		"content": `<style>.bp3yu1oem {
  d: path("M12 22v-9l7 -7");
}

.d0n0p9bwt {
  d: path("M19 10.5V6h-4.5");
}

.flz2zhftx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 11 5 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gmtljk7jt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 22v-9l7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.myme2pb3l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 10.5V6h-4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mz0o03tol {
  d: path("M10 11 5 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="gmtljk7jt"/><path class="myme2pb3l"/><path class="flz2zhftx"/><path class="bp3yu1oem"/><path class="d0n0p9bwt"/><path class="mz0o03tol"/></g>`,
		"fallback": "iconmind:keep-right-duotone-bold",
	});
}

export default Component;
