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
		"content": `<style>.gkz0o0bpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm0 5h15M8 11.5h3m3 0h2M8 15h3m3 0h2m-8 3.5h3");
}
</style><path class="gkz0o0bpz"/>`,
		"fallback": "uix-sharp:privacy-label",
	});
}

export default Component;
