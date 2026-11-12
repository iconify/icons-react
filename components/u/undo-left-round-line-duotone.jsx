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
		"content": `<style>.c8hqd_bko {
  d: path("M4 7H15C17.7614 7 20 9.23857 20 12C20 14.7614 17.7614 17 15 17H8.00001");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sne2kdbsx {
  stroke-linejoin: round;
  d: path("M7 4L4 7L7 10");
}
</style><g class="ipq1z-bjh"><path class="sne2kdbsx"/><path class="c8hqd_bko"/></g>`,
		"fallback": "solar:undo-left-round-line-duotone",
	});
}

export default Component;
