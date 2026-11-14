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
		"content": `<style>.ayxik89vm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19M4 4h15v3.5H4Zm0 6.25h11v3.5H4Zm0 6.25h7V20H4Z");
}
</style><path class="ayxik89vm"/>`,
		"fallback": "uix-sharp:timing-tower",
	});
}

export default Component;
