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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbxpl6brf {
  d: path("m8 7.75l1.732 1v2L8 11.75l-1.732-1v-2Zm-2.75 8c0-1.5 1.25-2.5 2.75-2.5s2.75 1 2.75 2.5M13.5 10h5m-5 3.5H17");
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="vbxpl6brf"/></g>`,
		"fallback": "uix-sharp:kyc-crypto",
	});
}

export default Component;
