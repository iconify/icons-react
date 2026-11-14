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
		"content": `<style>.pr6oxkboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5v16m-6-13h12m-14.5 6l2.5-6l2.5 6a2.5 2.5 0 0 1-5 0Zm12.138.82q-.138-.398-.138-.82l2.5-6l2.5 6q0 .191-.029.379M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><path class="pr6oxkboq"/>`,
		"fallback": "uix-sharp:legal-search-engine",
	});
}

export default Component;
