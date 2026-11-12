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
		"content": `<style>.dnt31gbid {
  d: path("M20 12H16");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wit3a9bcc {
  d: path("M12 12L4 12");
}
</style><g class="ipq1z-bjh"><path class="dnt31gbid"/><path class="wit3a9bcc"/></g>`,
		"fallback": "solar:minus-broken",
	});
}

export default Component;
