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

.ivlm3ivsq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4.293 6.293l4-4A1 1 0 0 1 9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7c0-.265.105-.52.293-.707");
}

.nbiuz816b {
  d: path("M11 10a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm3 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm3 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="ivlm3ivsq"/><path class="nbiuz816b"/></g>`,
		"fallback": "coolicons:sd-card-bulk-sharp",
	});
}

export default Component;
