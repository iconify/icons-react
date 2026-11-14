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
		"content": `<style>.fb9tqesaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11.5c-1.75-2-3.5-3.75-3.5-5.5a3.5 3.5 0 0 1 7 0c0 1.75-1.75 3.5-3.5 5.5ZM7 21c-1.75-2-3.5-3.75-3.5-5.5a3.5 3.5 0 0 1 7 0c0 1.75-1.75 3.5-3.5 5.5Zm10 0c-1.75-2-3.5-3.75-3.5-5.5a3.5 3.5 0 0 1 7 0c0 1.75-1.75 3.5-3.5 5.5Z");
}
</style><path class="fb9tqesaf"/>`,
		"fallback": "uix-sharp:map-cluster",
	});
}

export default Component;
