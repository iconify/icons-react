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
		"content": `<style>.e-xti72pq {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4m-13 3h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwegp-bsc {
  d: path("M13 13h4.5v4.5H13Z");
}
</style><g class="ulnmmdpxh"><path class="e-xti72pq"/><path class="zwegp-bsc"/></g>`,
		"fallback": "uix-sharp:sports-calendar",
	});
}

export default Component;
