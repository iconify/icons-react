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
		"content": `<style>.ajga3nq5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3L9 8.5C9 8.7761 8.7761 9 8.5 9L3 9M3 3L8.4 8.4M15 3L15 8.5C15 8.7761 15.2239 9 15.5 9L21 9M21 3L15.6 8.4M15 21L15 15.5C15 15.2239 15.2239 15 15.5 15L21 15M21 21L15.6 15.6M9 21L9 15.5C9 15.2239 8.7761 15 8.5 15L3 15M3 21L8.4 15.6");
}
</style><path class="ajga3nq5o"/>`,
		"fallback": "keyline-icons:minimize-2-fill",
	});
}

export default Component;
