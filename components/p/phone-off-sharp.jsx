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
		"content": `<style>.h823bzb4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11q9.25-8.75 18.5 0v3.5h-4.5V12Q12 7.75 7.25 12v2.5h-4.5v-1ZM12 12.75v6.5M9.75 17L12 19.25L14.25 17");
}
</style><path class="h823bzb4a"/>`,
		"fallback": "iconoven:phone-off-sharp",
	});
}

export default Component;
