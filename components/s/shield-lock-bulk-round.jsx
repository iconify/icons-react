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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ekcojebgp {
  d: path("M16 11v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2c0-.715.38-1.376 1-1.733V9a3 3 0 1 1 6 0v.267A2 2 0 0 1 16 11m-3-2a1 1 0 0 0-2 0Z");
}

.lnef9ckzr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 2h8a5 5 0 0 1 5 5v3c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V7a5 5 0 0 1 5-5");
}
</style><g class="cuyn6tgcc"><path class="lnef9ckzr"/><path class="ekcojebgp"/></g>`,
		"fallback": "coolicons:shield-lock-bulk-round",
	});
}

export default Component;
