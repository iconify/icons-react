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
		"content": `<style>.ekf2s55jf {
  d: path("M2.5 15H6l4 2.5h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.ha_zq2omk {
  d: path("M2.5 21.5H13l7.25-4.75c1-.75.25-2.25-1-1.75l-3.75 2.5M5 5.5h14v3H5Zm1 3h12v4H6Zm6-3v7m0-7C10.5 3 8 2.25 8 3.75c0 1 2 1.75 4 1.75m0 0c1.5-2.5 4-3.25 4-1.75c0 1-2 1.75-4 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ekf2s55jf"/><path class="ha_zq2omk"/></g>`,
		"fallback": "uix-sharp:service-cross-sell",
	});
}

export default Component;
