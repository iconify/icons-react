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
		"content": `<style>.vsrwb5qlw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Zm10.5 0a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Zm-10.5 6.5h10.5");
}
</style><path class="vsrwb5qlw"/>`,
		"fallback": "iconoven:voicemail-play-sharp",
	});
}

export default Component;
