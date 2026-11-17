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
		"content": `<style>.i8bozfohd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.091 9.75L2 12L6.091 14.25M6.091 9.75L2 7.5L12 2L22 7.5L17.909 9.75M6.091 9.75L12 13L17.909 9.75M6.091 14.25L2 16.5L12 22L22 16.5L17.909 14.25M6.091 14.25L12 17.5L17.909 14.25M17.909 9.75L22 12L17.909 14.25");
}
</style><path class="i8bozfohd"/>`,
		"fallback": "keyline-icons:layers-3-sharp",
	});
}

export default Component;
