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
		"content": `<style>.jbn9bgbxl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 8.5v.01m0 2.74v.01m0 2.74v.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vo1t5vb3o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.75v10a4.75 4.75 0 0 0 9.5 0V12l2.75-3.75h-7L13.75 12v5.5h-3.5V4.25h-3zm1.5-1.5v-1.5H5");
}
</style><g class="ux2u0rbkq"><path class="vo1t5vb3o"/><path class="jbn9bgbxl"/></g>`,
		"fallback": "iconoven:saxophone-sharp",
	});
}

export default Component;
