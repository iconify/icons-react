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
		"content": `<style>.poqrzecws {
  d: path("M20.25 4.75a3.5 4.5 45 1 1-6.5 6.5a3.5 4.5 45 1 1 6.5-6.5Zm-6.5 6.5L5 20m-.5-9.5l5-5m5 0l5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi6lqwgsy {
  d: path("M3.75 4.75a3.5 4.5-45 1 1 6.5 6.5a3.5 4.5-45 1 1-6.5-6.5Zm6.5 6.5L19 20");
}
</style><g class="ulnmmdpxh"><path class="xi6lqwgsy"/><path class="poqrzecws"/></g>`,
		"fallback": "uix-sharp:tie-break",
	});
}

export default Component;
