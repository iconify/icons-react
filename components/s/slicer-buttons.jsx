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
		"content": `<style>.cacmwex1f {
  fill: currentColor;
  d: path("M2.5 5H11v5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x74i2ib4t {
  d: path("M13 5h8.5v5H13ZM2.5 14H11v5H2.5ZM13 14h8.5v5H13Z");
}
</style><g class="ulnmmdpxh"><path class="cacmwex1f"/><path class="x74i2ib4t"/></g>`,
		"fallback": "uix-sharp:slicer-buttons",
	});
}

export default Component;
