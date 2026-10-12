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
		"content": `<style>.dv7i_bc8i {
  d: path("M4.25 21.25a7.75 7.75 0 0 1 15.5 0Zm3.5-6.75l6.75 6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mx0ir3bdi {
  cx: 12px;
  cy: 6.75px;
  r: 4px;
}
</style><g class="hntgybcog"><circle class="mx0ir3bdi"/><path class="dv7i_bc8i"/></g>`,
		"fallback": "iconoven:mayor-sash",
	});
}

export default Component;
