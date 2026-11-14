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
		"content": `<style>.ibbr2_bui {
  d: path("M13.75 6.5h4.5V11h-4.5Zm.5 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmoc8qbmx {
  d: path("M2.5 21.5v-18H8v18m3-18h10V20H11Z");
}
</style><g class="ulnmmdpxh"><path class="vmoc8qbmx"/><path class="ibbr2_bui"/></g>`,
		"fallback": "uix-sharp:video-intercom",
	});
}

export default Component;
