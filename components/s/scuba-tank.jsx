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
		"content": `<style>.s_3c4dbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.5h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Zm1 0v-3h3v3m0-1.5H17m-9.5 6h9");
}
</style><path class="s_3c4dbbl"/>`,
		"fallback": "uix-sharp:scuba-tank",
	});
}

export default Component;
