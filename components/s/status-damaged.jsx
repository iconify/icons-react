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
		"content": `<style>.ffnaf-adh {
  d: path("m2.5 3.5l2 4.5v10.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V8l2-4.5M4.5 8h15");
}

.pcw4smb7e {
  d: path("m12 8l-1.75 3.5l3 2.5l-2 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ffnaf-adh"/><path class="pcw4smb7e"/></g>`,
		"fallback": "uix-sharp:status-damaged",
	});
}

export default Component;
