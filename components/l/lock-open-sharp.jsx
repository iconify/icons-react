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
		"content": `<style>.e55uj_hwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9h16v12H4Zm7 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0M8 9V7a4 4 0 0 1 7.464-2");
}
</style><path class="e55uj_hwx"/>`,
		"fallback": "coolicons:lock-open-sharp",
	});
}

export default Component;
