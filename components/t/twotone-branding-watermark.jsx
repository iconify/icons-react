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
		"content": `<style>.f4g5ix6ao {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zm-10-7h9v6h-9z");
}

.g55lfcg7s {
  fill: currentColor;
  d: path("M3 19h18V5H3zm8-7h9v6h-9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="g55lfcg7s"/><path class="f4g5ix6ao"/>`,
		"fallback": "ic:twotone-branding-watermark",
	});
}

export default Component;
