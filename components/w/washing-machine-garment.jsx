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
		"content": `<style>.cwmrclp_r {
  d: path("M7.75 14.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM7 5h.01m6.49 0H17");
}

.u8zhxxbbm {
  d: path("M3.5 2.5h17v19h-17Zm0 5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u8zhxxbbm"/><path class="cwmrclp_r"/></g>`,
		"fallback": "uix-sharp:washing-machine-garment",
	});
}

export default Component;
