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

.e0e2vtbqt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 7 6 6 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e84dr_enj {
  d: path("m2 7 6 6 6 -6");
}

.lbkuffism {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 21h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.zp1u54_xm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 17 6 -6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="e0e2vtbqt"/><path class="zp1u54_xm"/><path class="lbkuffism"/><path class="e84dr_enj"/><path class="dn1egm5la"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:valley-duotone-regular",
	});
}

export default Component;
