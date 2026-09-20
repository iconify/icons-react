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

.m7g-nrbii {
  d: path("m231.53 146.57l-55.85-95.91l-.11-.19a56 56 0 0 0-95.14 0l-.11.19l-55.85 95.91A56 56 0 0 0 72.09 232h111.82a56 56 0 0 0 47.62-85.43M160 216H96v-48h64Zm58.86-20.55A39.49 39.49 0 0 1 183.91 216H176v-48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v48h-7.91a40 40 0 0 1-34-61.09a2 2 0 0 0 .11-.2l55.85-95.9a40 40 0 0 1 67.84 0l55.85 95.9a2 2 0 0 0 .11.2a39.5 39.5 0 0 1 1 40.54Z");
}

.nbu74sbed {
  d: path("M168 168v56H88v-56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="nbu74sbed"/><path class="m7g-nrbii"/></g>`,
		"fallback": "ph:onigiri-duotone",
	});
}

export default Component;
