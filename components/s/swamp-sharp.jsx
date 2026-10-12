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
		"content": `<style>.e0_eehbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15V4.5m0 4L9.25 5.75M12 10.5l3-3m-7.25 10C9 16 10.25 15 12 15s3 1 4.25 2.5m-13.5 0h2.5m13.5 0h2.5m-18.5 3.75c1.54 0 1.54-1.25 3.08-1.25s1.54 1.25 3.08 1.25S10.45 20 11.99 20s1.54 1.25 3.08 1.25S16.61 20 18.15 20s1.54 1.25 3.08 1.25");
}
</style><path class="e0_eehbrb"/>`,
		"fallback": "iconoven:swamp-sharp",
	});
}

export default Component;
