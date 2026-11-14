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
		"content": `<style>.ji9ntz2cx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12v10H6Zm0 10h12l-4.5 4h-3Zm1 0v8m10-8v8m-5-4v2.5m-6-12h12");
}
</style><path class="ji9ntz2cx"/>`,
		"fallback": "uix-sharp:storage-silo",
	});
}

export default Component;
