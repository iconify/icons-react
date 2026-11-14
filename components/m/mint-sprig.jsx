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
		"content": `<style>.phrkmfbcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V7m0 11c-3 0-5-2-5-4.5c3 0 5 1.5 5 4.5Zm0 0c3 0 5-2 5-4.5c-3 0-5 1.5-5 4.5Zm0-6c-2.5 0-4-1.5-4-3.5c2.5 0 4 1 4 3.5Zm0 0c2.5 0 4-1.5 4-3.5c-2.5 0-4 1-4 3.5Zm0-5c-1.5-1-1.5-3 0-4c1.5 1 1.5 3 0 4Z");
}
</style><path class="phrkmfbcg"/>`,
		"fallback": "uix-sharp:mint-sprig",
	});
}

export default Component;
