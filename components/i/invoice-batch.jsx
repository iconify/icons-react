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
		"content": `<style>.qowo29bly {
  d: path("M6 6V3h11.5v7.5m-12-.5h5m-5 4H9m10.75 2.25C19.5 15.5 18.9 15 18 15c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M18 13.75V15m0 6v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1mvzpaab {
  d: path("M13.5 20.5v.5l-1.75-1.25L10 21l-2-1.25L6 21l-1.75-1.25L2.5 21V6h11v10.4m0 .2V18");
}
</style><g class="ulnmmdpxh"><path class="z1mvzpaab"/><path class="qowo29bly"/></g>`,
		"fallback": "uix-sharp:invoice-batch",
	});
}

export default Component;
