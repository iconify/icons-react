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
		"content": `<style>.hadkmwhbm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75h15.5v18.5H4.25zm4 4.5v9.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xie25eb5k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 7.25h.01M8.25 12h.01m-.01 4.75h.01");
}

.zzr_volsu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 7.25h5m-5 4.75h5m-5 4.75h3.5");
}
</style><g class="ux2u0rbkq"><path class="hadkmwhbm"/><path class="xie25eb5k"/><path class="zzr_volsu"/></g>`,
		"fallback": "iconoven:itinerary-sharp",
	});
}

export default Component;
