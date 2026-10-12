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
		"content": `<style>.ttdvakozq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 21.25V4.75m17.5 16.5V4.75M3.25 8Q12 4 20.75 8M3.25 19h17.5M6.25 6.86V19m3-12.8V19m3-13v13m3-12.72V19");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zajpd0huc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 12h.01");
}
</style><g class="ux2u0rbkq"><path class="ttdvakozq"/><path class="zajpd0huc"/></g>`,
		"fallback": "iconoven:safety-gate-sharp",
	});
}

export default Component;
