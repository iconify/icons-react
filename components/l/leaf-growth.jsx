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
		"content": `<style>.d0o0o7f1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5c2.5-3.25 14.5-3.25 17 0Zm8.5-2.75V10m0 5c-4 0-7-2.5-7-6c4 0 7 2.5 7 6Zm0-5c0-3.5 3-6 7-6c0 3.5-3 6-7 6Z");
}
</style><path class="d0o0o7f1m"/>`,
		"fallback": "uix-sharp:leaf-growth",
	});
}

export default Component;
