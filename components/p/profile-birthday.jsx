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
		"content": `<style>.haighcwhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h18v7.5H3Zm3-5.5h12V14H6Zm6-3v3m0-6h.01");
}
</style><path class="haighcwhe"/>`,
		"fallback": "uix-sharp:profile-birthday",
	});
}

export default Component;
