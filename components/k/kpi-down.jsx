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
		"content": `<style>.fdpdqbbys {
  d: path("M2.5 4.5h19v15h-19ZM6 9h4m-4 5.5h4m5.5-6v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7_varc1p {
  d: path("m13 13l2.5 2.5L18 13");
}
</style><g class="ulnmmdpxh"><path class="fdpdqbbys"/><path class="z7_varc1p"/></g>`,
		"fallback": "uix-sharp:kpi-down",
	});
}

export default Component;
