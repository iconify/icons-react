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
		"content": `<style>.belrtj2nt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v19H4Zm3.5 0v19M11 12v6m2.75-6v6m2.75-6v6");
}
</style><path class="belrtj2nt"/>`,
		"fallback": "uix-sharp:isbn-label",
	});
}

export default Component;
