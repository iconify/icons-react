import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.kz1zrxb2z {
  d: path("M200 32a8 8 0 0 0-8 8v69.23L72.43 34.45A15.95 15.95 0 0 0 48 47.88v160.24a16 16 0 0 0 24.43 13.43L192 146.77V216a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8M64 207.93V48.05l127.84 80Z");
}

.qr0zmu7-y {
  d: path("M196.3 134.65L68.19 214.77A8 8 0 0 1 56 208.12V47.88a8 8 0 0 1 12.19-6.65l128.11 80.12a7.83 7.83 0 0 1 0 13.3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="qr0zmu7-y"/><path class="kz1zrxb2z"/></g>`,
		"fallback": "ph:skip-forward-duotone",
	});
}

export default Component;
