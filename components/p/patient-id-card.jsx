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

.m7ac2s0vc {
  d: path("M6.5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.5 6c.5-2 2-3 3.5-3s3 1 3.5 3m2.5-6.5H19m-4.5 4H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="m7ac2s0vc"/></g>`,
		"fallback": "uix-sharp:patient-id-card",
	});
}

export default Component;
