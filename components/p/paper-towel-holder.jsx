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
		"content": `<style>.hl53vobwk {
  d: path("M3.5 5v9m0-4.5h8M7 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.td7zdg99f {
  d: path("M11.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8.5 0V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hl53vobwk"/><path class="td7zdg99f"/></g>`,
		"fallback": "uix-sharp:paper-towel-holder",
	});
}

export default Component;
