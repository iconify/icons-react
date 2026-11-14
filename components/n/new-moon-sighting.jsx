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
		"content": `<style>.pgdq3cc5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3a9 9 0 0 0 0 18a11 11 0 0 1 0-18Zm1.612 12.249l6.797-3.17l1.479 3.172l-6.797 3.17ZM17.75 16.5l-2 5m2-5l2.25 5");
}
</style><path class="pgdq3cc5w"/>`,
		"fallback": "uix-sharp:new-moon-sighting",
	});
}

export default Component;
