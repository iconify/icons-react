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
		"content": `<style>.mdl3f-7wv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 7.5c-2.5 0-4 1.5-5.5 4.5s-3.5 4.5-6.25 4.5S4 14.5 4 12s1.75-4.5 4.25-4.5S13 9 14.5 12s3 4.5 5.5 4.5");
}
</style><path class="mdl3f-7wv"/>`,
		"fallback": "iconoven:proportional-to-sharp",
	});
}

export default Component;
