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
		"content": `<style>.za7zzpkvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM3 20.5c0-3.75 3-6 7-6c1.51 0 2.735.285 3.782.747M18 15v6m-3-3h6");
}
</style><path class="za7zzpkvl"/>`,
		"fallback": "uix-sharp:profile-add-account",
	});
}

export default Component;
