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
		"content": `<style>.eaypatbph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16C6.5 16 7.5 12.75 8.5 9.5s3.5-6.25 7.25-6.25c3 0 5.5 2.25 5.5 5C20 7 16.75 6.75 16 10c-.75 3 .5 4.75 3 6Zm0 4.25q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0");
}
</style><path class="eaypatbph"/>`,
		"fallback": "iconoven:tsunami",
	});
}

export default Component;
