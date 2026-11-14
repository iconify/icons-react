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
		"content": `<style>.py1fw5b4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a6 9.5 0 1 0 12 0a6 9.5 0 1 0-12 0Zm0 0h12");
}
</style><path class="py1fw5b4a"/>`,
		"fallback": "uix-sharp:theta-symbol",
	});
}

export default Component;
