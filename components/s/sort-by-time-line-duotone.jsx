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
		"content": `<style>.byu9zgdxu {
  cx: 17px;
  cy: 12px;
  r: 5px;
}

.eonjggvry {
  stroke-linejoin: round;
  d: path("M17 10V11.8462L18 13");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5e8npbes {
  d: path("M8 12H2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.o9_okin1f {
  d: path("M10 7L2 7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ra4u4oiby {
  d: path("M10 17H2");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="o9_okin1f"/><path class="j5e8npbes"/><path class="ra4u4oiby"/><circle class="byu9zgdxu"/><path class="eonjggvry"/></g>`,
		"fallback": "solar:sort-by-time-line-duotone",
	});
}

export default Component;
