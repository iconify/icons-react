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
		"content": `<style>.aifzpoajj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 19.5l10-15M3.75 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM16 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="aifzpoajj"/>`,
		"fallback": "uix-sharp:permille",
	});
}

export default Component;
