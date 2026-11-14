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
		"content": `<style>.ib07ibbzm {
  d: path("M3 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM16 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.nsx8wwl9n {
  d: path("M6.25 15.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm6.5-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ib07ibbzm"/><path class="nsx8wwl9n"/></g>`,
		"fallback": "uix-sharp:polymer-chain",
	});
}

export default Component;
