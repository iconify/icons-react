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
		"content": `<style>.kp86mcd4u {
  d: path("M2.75 3.75h18.5v11.5H2.75z");
}

.p9bhuub8s {
  d: path("m10.86 7.59l2.78 1.57l.61.34l-.61.34l-2.78 1.57l-.61.34v-4.5zM2.75 19.75h4.5m3 0h4m3 0h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kp86mcd4u"/><path class="p9bhuub8s"/></g>`,
		"fallback": "iconoven:video-chapters-sharp",
	});
}

export default Component;
