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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.haspjcc0u {
  fill: currentColor;
  d: path("M9 13.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qy4y3cbmh {
  d: path("M9 13.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rnyye8dag {
  d: path("M12 13.5h2.5");
}

.vw_dl18nv {
  d: path("M12 10.5v3");
}
</style><g class="nrj6p8qat"><path class="r0jamibkm"/><path class="haspjcc0u"/><path class="bn_pu6j-z"/><path class="qy4y3cbmh"/><path class="vw_dl18nv"/><path class="rnyye8dag"/></g>`,
		"fallback": "iconmind:retention-clock-duotone-regular",
	});
}

export default Component;
