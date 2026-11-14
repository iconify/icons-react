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
		"content": `<style>.ipyq2mb-o {
  d: path("M12.2 21H3V4h18v8.3M3 9h18M8 2.5v3m8-3v3");
}

.thol3pa-d {
  d: path("M15 19.5h7m-6 0V17a2.5 2.5 0 0 1 5 0v2.5m-3.5 0a1 1 0 0 0 2 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ipyq2mb-o"/><path class="thol3pa-d"/></g>`,
		"fallback": "uix-sharp:notification-memory",
	});
}

export default Component;
