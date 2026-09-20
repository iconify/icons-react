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

.hi78wybki {
  d: path("M237.9 200.1L141.85 32.18a16 16 0 0 0-27.89 0l-95.89 168a16 16 0 0 0 19.26 22.92L128 192.45l90.67 30.63a16.2 16.2 0 0 0 5.33.92a16 16 0 0 0 13.86-23.9Zm-14.05 7.84L136 178.26V120a8 8 0 0 0-16 0v58.26l-87.84 29.68l-.16.06l95.86-168L224 208Z");
}

.okuvmnb_u {
  d: path("M221.28 215.51L128 184l-93.28 31.51a8 8 0 0 1-9.67-11.44l95.85-168a8 8 0 0 1 14 0l96.09 168a8 8 0 0 1-9.71 11.44");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="okuvmnb_u"/><path class="hi78wybki"/></g>`,
		"fallback": "ph:paper-plane-duotone",
	});
}

export default Component;
