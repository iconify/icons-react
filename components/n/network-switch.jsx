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
		"content": `<style>.h-5nxbbwi {
  d: path("M2 7h20v11H2Z");
}

.rnrqvuikb {
  d: path("M4.75 15v-3.5h.75v-.75H7v.75h.75V15Zm5.75 0v-3.5h.75v-.75h1.5v.75h.75V15Zm5.75 0v-3.5H17v-.75h1.5v.75h.75V15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-5nxbbwi"/><path class="rnrqvuikb"/></g>`,
		"fallback": "uix-sharp:network-switch",
	});
}

export default Component;
