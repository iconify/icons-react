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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.iunpo0bqi {
  d: path("M3 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V7a2 2 0 0 1-2 2H8.5l-3 2V9H5a2 2 0 0 1-2-2ZM3 14h9.5M3 17.5h8.5M3 21h7m10.75-2.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iunpo0bqi"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:voice-routine",
	});
}

export default Component;
