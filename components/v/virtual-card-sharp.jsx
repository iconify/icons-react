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
		"content": `<style>.ah69srb4f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 18.25h.01");
}

.ba6e8bhbz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 10.75h7v10.5h-7z");
}

.k5by3jrsy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h15v11h-15zm0 4h15");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="k5by3jrsy"/><path class="ba6e8bhbz"/><path class="ah69srb4f"/></g>`,
		"fallback": "iconoven:virtual-card-sharp",
	});
}

export default Component;
