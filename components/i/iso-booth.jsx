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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyub93iyw {
  d: path("m7 6l2 2l2-2l2 2l2-2l2 2m-7 3h4v6h-4Zm2 6v4.5");
}

.wffwdccte {
  d: path("M4 2.5h16v19H4Z");
}
</style><g class="ulnmmdpxh"><path class="wffwdccte"/><path class="vyub93iyw"/></g>`,
		"fallback": "uix-sharp:iso-booth",
	});
}

export default Component;
