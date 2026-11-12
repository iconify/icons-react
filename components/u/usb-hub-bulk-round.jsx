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
		"content": `<style>.bnhh6jnob {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2ZM2 16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.hkff2s1uq {
  d: path("M13 13a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm-4 3a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm8 0a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bnhh6jnob"/><path class="hkff2s1uq"/></g>`,
		"fallback": "coolicons:usb-hub-bulk-round",
	});
}

export default Component;
