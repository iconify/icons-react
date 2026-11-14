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
		"content": `<style>.f7x-h_b9g {
  d: path("M3.5 9.5a8.5 7 0 0 1 17 0q-4.25-1.75-8.5 0q-4.25-1.75-8.5 0Zm4 3.5h9v8.5h-9Zm-4-3.5l4 3.5m13-3.5l-4 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwjh3lu5t {
  d: path("M10.5 17.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="f7x-h_b9g"/><path class="vwjh3lu5t"/></g>`,
		"fallback": "uix-sharp:nft-airdrop",
	});
}

export default Component;
