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

.jkgtrbbjt {
  d: path("M224 144h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8m-8 56h-72v-40h72ZM71.59 61.47a8 8 0 0 0-15.18 0l-40 120A8 8 0 0 0 24 192h80a8 8 0 0 0 7.59-10.53ZM35.1 176L64 89.3L92.9 176ZM208 76a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52m-88 0a36 36 0 1 1 36 36a36 36 0 0 1-36-36");
}

.l_yuz1bts {
  d: path("m64 64l40 120H24Zm136 12a44 44 0 1 0-44 44a44 44 0 0 0 44-44m-64 76v56h88v-56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="l_yuz1bts"/><path class="jkgtrbbjt"/></g>`,
		"fallback": "ph:shapes-duotone",
	});
}

export default Component;
