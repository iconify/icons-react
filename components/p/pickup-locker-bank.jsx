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
		"content": `<style>.hz2ik4b6m {
  d: path("M2.5 2.5h19v19h-19Zm6 0v19m7-19v19");
}

.k2subul5b {
  d: path("M10.25 5h3.5v4.5h-3.5ZM2.5 9h6m-6 6.25h6m7-6.25h6m-6 6.25h6M10.25 14h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hz2ik4b6m"/><path class="k2subul5b"/></g>`,
		"fallback": "uix-sharp:pickup-locker-bank",
	});
}

export default Component;
