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
		"content": `<style>.efgr69bfc {
  d: path("M6 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 5c.4-1.5 1.6-2.25 3-2.25s2.6.75 3 2.25m3-6h4.5M14 13.5h3.5");
}

.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="efgr69bfc"/></g>`,
		"fallback": "uix-sharp:kyc-id-front",
	});
}

export default Component;
