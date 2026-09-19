import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h0pmrlbve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 23A8.75 8.75 0 1 1 23 14.25V19c0 2.216-1.784 4-4 4zM25 14.25A8.75 8.75 0 1 1 33.75 23H29c-2.216 0-4-1.784-4-4zM33.75 25A8.75 8.75 0 1 1 25 33.75V29c0-2.216 1.784-4 4-4zM23 33.75A8.75 8.75 0 1 1 14.25 25H19c2.216 0 4 1.784 4 4z");
}
</style><path class="h0pmrlbve"/>`,
		"fallback": "arcticons:nexa-icon-pack",
	});
}

export default Component;
