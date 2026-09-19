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
		"content": `<style>.pir9lutmr {
  fill: currentColor;
  d: path("M11 13h2v2h-2zm8-8H5v14h14zm-4 4h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.uwkc_6ncb {
  fill: currentColor;
  d: path("M9 9v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7h-4a2 2 0 0 0-2 2m4 4v2h-2v-2zm-8 8h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5z");
}
</style><path class="pir9lutmr"/><path class="uwkc_6ncb"/>`,
		"fallback": "ic:twotone-looks-6",
	});
}

export default Component;
