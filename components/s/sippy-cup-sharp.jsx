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
		"content": `<style>.ehr4d3bwn {
  d: path("M10 6.25v-3.5h4v3.5ZM7 10V6.25h10V10Zm.75 0h8.5l-.75 9.25l-.222 1.764L13.5 21h-3l-1.778.014L8.5 19.25Z");
}

.n8p8_cbdm {
  d: path("M7.95 12.5H5v4h3.28m7.77-4H19v4h-3.28");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ehr4d3bwn"/><path class="n8p8_cbdm"/></g>`,
		"fallback": "iconoven:sippy-cup-sharp",
	});
}

export default Component;
