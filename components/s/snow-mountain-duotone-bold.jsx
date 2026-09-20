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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.g91uwsb-i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jszbb1ext {
  d: path("m2 18 8 -8 4 4 6 -6 2 2");
}

.k4o7e-bqb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 13 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tn2g89bjg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m2 18 8 -8 4 4 6 -6 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ujgggmb5i {
  d: path("m7 13 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="tn2g89bjg"/><path class="k4o7e-bqb"/><path class="g91uwsb-i"/><path class="jszbb1ext"/><path class="ujgggmb5i"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:snow-mountain-duotone-bold",
	});
}

export default Component;
