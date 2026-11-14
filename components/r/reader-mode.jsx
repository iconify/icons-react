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
		"content": `<style>.txmzz7bpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v19H4Zm3.5 0v19m3-14.5H17m-6.5 3.5H17M10.5 14H15");
}
</style><path class="txmzz7bpj"/>`,
		"fallback": "uix-sharp:reader-mode",
	});
}

export default Component;
