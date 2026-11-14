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
		"content": `<style>.pkrtvmbgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18v4H3Zm3 4v11m3-11v11m3-11v11m3-11v11m3-11v11");
}
</style><path class="pkrtvmbgu"/>`,
		"fallback": "uix-sharp:lice-comb",
	});
}

export default Component;
