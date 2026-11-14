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
		"content": `<style>.v9hgjkrne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3L7 21h10ZM9 14h6m-4.5-5h3M8 18h8");
}
</style><path class="v9hgjkrne"/>`,
		"fallback": "uix-sharp:tower-lattice",
	});
}

export default Component;
