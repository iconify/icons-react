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

.pcbmj8bwf {
  d: path("M9 6.5h6v11H9Zm.25 5.5h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bts7pnzsx"/><path class="pcbmj8bwf"/></g>`,
		"fallback": "uix-sharp:light-switch",
	});
}

export default Component;
