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
		"content": `<style>.l059a06bb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM15.6836 7.2639L8.8426 7.2639L12 12L8.8426 16.7361L15.6836 16.7361");
}
</style><path class="l059a06bb"/>`,
		"fallback": "keyline-icons:square-sigma-sharp-fill",
	});
}

export default Component;
