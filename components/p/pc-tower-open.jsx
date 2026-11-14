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
		"content": `<style>.aqfj4rb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h7a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H9m0-18L4 6v12l5 2.5ZM14 8h.01M14 12h.01");
}
</style><path class="aqfj4rb2b"/>`,
		"fallback": "uix-sharp:pc-tower-open",
	});
}

export default Component;
