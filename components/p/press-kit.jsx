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
		"content": `<style>.s2iilfbze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9V3.5h11V9M2.5 9H9l1.5 2h11v8.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2ZM9 6.25h5");
}
</style><path class="s2iilfbze"/>`,
		"fallback": "uix-sharp:press-kit",
	});
}

export default Component;
