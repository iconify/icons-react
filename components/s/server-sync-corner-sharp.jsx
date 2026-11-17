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
		"content": `<style>.hduwt946p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v6H3Zm6 16H3v-6h6M7 7h.01M7 17h.01M21 19a4.472 4.472 0 0 1-8 0m3 0h-3v3m0-6a4.472 4.472 0 0 1 8 0m-3 0h3v-3");
}
</style><path class="hduwt946p"/>`,
		"fallback": "coolicons:server-sync-corner-sharp",
	});
}

export default Component;
