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
		"content": `<style>.lhicevmib {
  d: path("M2.5 2.5h19V16h-19Zm4.5 19L9 16m8 5.5L15 16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0b590hnl {
  d: path("M9.5 5.5L16 9.25L9.5 13Z");
}
</style><g class="ulnmmdpxh"><path class="lhicevmib"/><path class="y0b590hnl"/></g>`,
		"fallback": "uix-sharp:presentation-video",
	});
}

export default Component;
