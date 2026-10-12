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
		"content": `<style>.aygffcbul {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h12.5v7.5H2.75zM15.25 7h3.25v5h-3.25z");
}

.d_lskeb7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 13.25v8m-3 0h6M20.25 5.5l1-1m0 5h.01m-1.01 4l1 1");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v6wx0-brw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9.5h.01");
}
</style><g class="ux2u0rbkq"><path class="aygffcbul"/><path class="v6wx0-brw"/><path class="d_lskeb7h"/></g>`,
		"fallback": "iconoven:speed-camera-sharp",
	});
}

export default Component;
