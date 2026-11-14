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
		"content": `<style>.t33xaroes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5v14h-6.5Zm5.5 0v14h6.5ZM12 2.5v19");
}
</style><path class="t33xaroes"/>`,
		"fallback": "uix-sharp:symmetry-guide",
	});
}

export default Component;
