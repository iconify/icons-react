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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.n0nbhgyav {
  fill: currentColor;
  d: path("M6.5 6.5h11v2h-11Z");
}

.rs-dxacoi {
  d: path("M6.5 12h11m-8 3.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="n0nbhgyav"/><path class="rs-dxacoi"/></g>`,
		"fallback": "uix-sharp:mask-linear-gradient",
	});
}

export default Component;
