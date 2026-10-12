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
		"content": `<style>.e3jo1e18z {
  d: path("M8.75 9.75h6.5v5h-6.5zm1.5 0V7h3.5v2.75");
}

.hw-xn1khn {
  d: path("M4.75 3.75h16.5v13.5H10l-4.5 3.5v-3.5H2.75V3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hw-xn1khn"/><path class="e3jo1e18z"/></g>`,
		"fallback": "iconoven:secure-chat-sharp",
	});
}

export default Component;
