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
		"content": `<style>.maiyazw3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm11 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM6.5 15.75h11");
}
</style><path class="maiyazw3v"/>`,
		"fallback": "uix-sharp:voicemail",
	});
}

export default Component;
