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
		"content": `<style>.nvq0q2bgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5c-2-2-4.5-4.75-4.5-7.75a4.5 4.5 0 0 1 9 0c0 3-2.5 5.75-4.5 7.75ZM5 9.25C3.75 8 2.5 6.75 2.5 5a2.5 2.5 0 0 1 5 0c0 1.75-1.25 3-2.5 4.25Zm13.5 1.5c-1.25-1.25-3-2.75-3-5.25a3 3 0 0 1 6 0c0 2.5-1.75 4-3 5.25Zm-6.5 3h.01");
}
</style><path class="nvq0q2bgl"/>`,
		"fallback": "uix-sharp:map-pins-multiple",
	});
}

export default Component;
