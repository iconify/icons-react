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
		"content": `<style>.dogyydbmf {
  d: path("M3.5 14.5L12 8l8.5 6.5v7h-17ZM12 8V2.5m0 0L17 4l-5 1.5Z");
}

.lxhoymbab {
  d: path("M10 21.5v-4h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dogyydbmf"/><path class="lxhoymbab"/></g>`,
		"fallback": "uix-sharp:sports-club",
	});
}

export default Component;
