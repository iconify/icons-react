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
		"content": `<style>.m79m3ts2h {
  d: path("M2.5 14.5V11L6 10l2.5-4.5H15l3.5 4.5l3 1v3.5ZM6 10h12.5M12 5.5V10");
}

.q4rmk7b1b {
  d: path("M5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m79m3ts2h"/><path class="q4rmk7b1b"/></g>`,
		"fallback": "uix-sharp:volunteer-driver",
	});
}

export default Component;
