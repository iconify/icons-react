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
		"content": `<style>.em_x23u7l {
  d: path("m12 3.5l1.5 7l3 1.5l-3 1.5l-1.5 7l-1.5-7l-3-1.5l3-1.5Z");
}

.imc_7wbfu {
  d: path("M2.5 12a9.5 3.25 0 1 0 19 0a9.5 3.25 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em_x23u7l"/><path class="imc_7wbfu"/></g>`,
		"fallback": "uix-sharp:protostar",
	});
}

export default Component;
