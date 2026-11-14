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
		"content": `<style>.r0a_wnehg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h17v3h-17Zm0 6h17v3h-17Zm0 6h17v3h-17Zm8.5-14v19");
}
</style><path class="r0a_wnehg"/>`,
		"fallback": "uix-sharp:palm-leaf-manuscript",
	});
}

export default Component;
