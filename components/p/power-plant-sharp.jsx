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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtxm1hb9j {
  d: path("M2.75 20.25v-17H6V11h3V6h3.25v5h9v10.25H2.75z");
}

.ytr5yacpv {
  d: path("m17 13.25l-2.25 3.25h3l-2 3");
}
</style><g class="x2cwu0gfd"><path class="xtxm1hb9j"/><path class="ytr5yacpv"/></g>`,
		"fallback": "iconoven:power-plant-sharp",
	});
}

export default Component;
