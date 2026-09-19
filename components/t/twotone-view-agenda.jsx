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
		"content": `<style>.da_7bo6mw {
  fill: currentColor;
  d: path("M5 5h14v4H5zm0 10h14v4H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.jbzus25sp {
  fill: currentColor;
  d: path("M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2m0 6H5v-4h14zm0-16H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 6H5V5h14z");
}
</style><path class="da_7bo6mw"/><path class="jbzus25sp"/>`,
		"fallback": "ic:twotone-view-agenda",
	});
}

export default Component;
