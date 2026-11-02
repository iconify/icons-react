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
		"content": `<style>.dfdd8xbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 7h10M9 12h10M9 17h10M5 7h.01M5 12h.01M5 17h.01");
}
</style><path class="dfdd8xbro"/>`,
		"fallback": "coolicons:list-unordered-sharp",
	});
}

export default Component;
