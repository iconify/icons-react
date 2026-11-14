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
		"content": `<style>.fk3pdublz {
  d: path("M5 10.5v-1a7 7 0 0 1 14 0v1");
}

.ncc_y4a1b {
  d: path("M3.5 9.5h3v5h-3Zm14 0h3v5h-3ZM9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-4 12c0-3 3-5 7-5s7 2 7 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fk3pdublz"/><path class="ncc_y4a1b"/></g>`,
		"fallback": "uix-sharp:live-listener",
	});
}

export default Component;
