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
		"content": `<style>.naj80kbas {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5h7m3.5 0h8m-18.5 6h4m3.25 0h11.25m-18.5 6h5.5");
}

.razwvsbuw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.25 17.5h.01m3.74 0h.01m3.74 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="naj80kbas"/><path class="razwvsbuw"/></g>`,
		"fallback": "iconoven:streaming-text-sharp",
	});
}

export default Component;
