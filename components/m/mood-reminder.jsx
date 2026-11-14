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
		"content": `<style>.dx87l4b8k {
  d: path("M13.75 5.969a3.5 3.5 0 0 1 0 6.062");
}

.u-cunt61y {
  d: path("M12 2.5V4M6 16v-6a6 6 0 0 1 12 0v6l1.5 2h-15Zm4.25 5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u-cunt61y"/><path class="dx87l4b8k"/></g>`,
		"fallback": "uix-sharp:mood-reminder",
	});
}

export default Component;
