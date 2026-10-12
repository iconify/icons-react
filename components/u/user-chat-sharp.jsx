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
		"content": `<style>.b7i9hdbjq {
  d: path("M4 20.25h11.75v-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5v.75zm12.5-16.5h4.75v5.5H18l-1.5 1.5v-1.5h-1v-5.5z");
}

.p1nbocand {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="p1nbocand"/><path class="b7i9hdbjq"/></g>`,
		"fallback": "iconoven:user-chat-sharp",
	});
}

export default Component;
