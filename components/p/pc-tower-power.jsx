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
		"content": `<style>.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbi238bfj {
  d: path("M14.089 8.01a3.25 3.25 0 1 1-4.178 0M12 6.25v4");
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="zbi238bfj"/></g>`,
		"fallback": "uix-sharp:pc-tower-power",
	});
}

export default Component;
