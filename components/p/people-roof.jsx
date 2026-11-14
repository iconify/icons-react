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
		"content": `<style>.l2hz_w88g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5L12 3l9.5 7.5M6.25 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM5.5 20.5c0-1.75 1.1-3 2.5-3s2.5 1.25 2.5 3m3 0c0-1.75 1.1-3 2.5-3s2.5 1.25 2.5 3");
}
</style><path class="l2hz_w88g"/>`,
		"fallback": "uix-sharp:people-roof",
	});
}

export default Component;
