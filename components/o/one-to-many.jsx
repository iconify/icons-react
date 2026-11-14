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
		"content": `<style>.fj91iff5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9.5-7H17m-5 0l5.5-5.5M12 12l5.5 5.5");
}
</style><path class="fj91iff5d"/>`,
		"fallback": "uix-sharp:one-to-many",
	});
}

export default Component;
