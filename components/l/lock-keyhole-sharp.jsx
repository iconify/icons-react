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
		"content": `<style>.xnav8gbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9h16v12H4Zm7 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v2M8 9V7a4 4 0 1 1 8 0v2");
}
</style><path class="xnav8gbon"/>`,
		"fallback": "coolicons:lock-keyhole-sharp",
	});
}

export default Component;
