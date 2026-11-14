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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r94fikbiw {
  d: path("M4.5 3.5v17h15v-17M12 5v10");
}

.smgis0fsx {
  d: path("M8.5 11.5L12 15l3.5-3.5");
}
</style><g class="hntgybcog"><path class="r94fikbiw"/><path class="smgis0fsx"/></g>`,
		"fallback": "uix:parking-bay-indicator",
	});
}

export default Component;
