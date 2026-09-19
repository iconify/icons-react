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
		"content": `<style>.kbzv78-8g {
  fill: currentColor;
  d: path("M15.55 17.42v1.03h1.03L20.03 15L19 13.97z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.w233okbee {
  fill: currentColor;
  d: path("M18 4h-2v7.9l2-2zM4 4h2v16H4zm6 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm12.56-3.41l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L14 16.73V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12m-5.98 5.86h-1.03v-1.03L19 13.97L20.03 15z");
}
</style><path class="kbzv78-8g"/><path class="w233okbee"/>`,
		"fallback": "ic:twotone-edit-road",
	});
}

export default Component;
