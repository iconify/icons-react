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
		"content": `<style>.bhl_zu55p {
  d: path("M9.5 10.5 12 8l2.5 2.5");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jb50k2vnl {
  fill: currentColor;
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ss0frm8tj {
  d: path("M13.5 4H16a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
}
</style><g class="hntgybcog"><path class="jb50k2vnl"/><path class="ss0frm8tj"/><path class="h7bcztycq"/><path class="bhl_zu55p"/></g>`,
		"fallback": "iconmind:quota-increase-duotone-thin",
	});
}

export default Component;
