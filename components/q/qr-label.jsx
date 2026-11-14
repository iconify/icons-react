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
		"content": `<style>.bts7pnzsx {
  d: path("M4 3.5h16v17H4Z");
}

.fwsd42b0s {
  d: path("M7.5 7H11v3.5H7.5ZM13 7h3.5v3.5H13Zm-5.5 6H11v3.5H7.5Zm7.5 2h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bts7pnzsx"/><path class="fwsd42b0s"/></g>`,
		"fallback": "uix-sharp:qr-label",
	});
}

export default Component;
