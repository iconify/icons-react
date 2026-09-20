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
		"content": `<style>.bv0-fcbtg {
  d: path("M5 6h5v5h5v5h4");
}

.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kmkbwvbqr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 6h5v5h5v5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="kmkbwvbqr"/><path class="qe97cg-lx"/><path class="bv0-fcbtg"/></g>`,
		"fallback": "iconmind:lr-schedule-duotone-regular",
	});
}

export default Component;
