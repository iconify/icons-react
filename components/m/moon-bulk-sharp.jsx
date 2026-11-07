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
		"content": `<style>.rp8us__mi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a1 1 0 0 1 .625 1.781a5.4 5.4 0 0 0 0 8.438a5.403 5.403 0 0 0 7.594-.844A1.002 1.002 0 0 1 22 12");
}
</style><path class="rp8us__mi"/>`,
		"fallback": "coolicons:moon-bulk-sharp",
	});
}

export default Component;
