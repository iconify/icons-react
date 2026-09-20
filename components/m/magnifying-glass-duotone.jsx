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
		"content": `<style>.b1sqawbzr {
  d: path("M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.wca69_z7d {
  d: path("m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72");
}
</style><g class="cuyn6tgcc"><path class="b1sqawbzr"/><path class="wca69_z7d"/></g>`,
		"fallback": "ph:magnifying-glass-duotone",
	});
}

export default Component;
