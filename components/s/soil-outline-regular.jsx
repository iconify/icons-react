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
		"content": `<style>.elo_ccj2r {
  d: path("M9 4v7");
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.k187sabpz {
  d: path("M2 11h20");
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

.xh1xf-b_h {
  d: path("M10 9c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
}
</style><g class="nrj6p8qat"><path class="k187sabpz"/><path class="ils7yp4cg"/><path class="oqfv9rb9x"/><path class="elo_ccj2r"/><path class="xh1xf-b_h"/></g>`,
		"fallback": "iconmind:soil-outline-regular",
	});
}

export default Component;
