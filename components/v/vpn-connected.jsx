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
		"content": `<style>.c3u4g1nzv {
  d: path("M7.5 10.5a3 7.5 0 1 0 6 0a3 7.5 0 1 0-6 0Zm-4.5 0h15M14.75 18l2 2L21 15.75");
}

.r8a9qcmsq {
  d: path("M11.154 17.971a7.5 7.5 0 1 1 6.817-6.817");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r8a9qcmsq"/><path class="c3u4g1nzv"/></g>`,
		"fallback": "uix-sharp:vpn-connected",
	});
}

export default Component;
