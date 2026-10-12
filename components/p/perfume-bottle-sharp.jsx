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
		"content": `<style>.d3c_6ab3f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.75h6v3.5H9zm1.5 3.5h3v4.25h-3zM5.75 10.5h12.5v10.75H5.75z");
}

.rti6afb8w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 4.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d3c_6ab3f"/><path class="rti6afb8w"/></g>`,
		"fallback": "iconoven:perfume-bottle-sharp",
	});
}

export default Component;
