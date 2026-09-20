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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bj2hlhbfp {
  d: path("M3 12h12");
}

.d_scobift {
  d: path("M3 18h6");
}

.lf6jf1bxr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ugv0mtd4a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="ugv0mtd4a"/><path class="lf6jf1bxr"/><path class="xgrfb-bqu"/><path class="bj2hlhbfp"/><path class="d_scobift"/></g>`,
		"fallback": "iconmind:sort-duotone-regular",
	});
}

export default Component;
