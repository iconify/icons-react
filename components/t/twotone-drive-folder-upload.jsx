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
		"content": `<style>.cczwequ4g {
  fill: currentColor;
  d: path("M11 13v4h2v-4h3l-3.99-4L8 13z");
}

.hl72ww78g {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20z");
}

.ifj5mc70d {
  fill: currentColor;
  d: path("M9.17 6H4v12h16V8h-8.83zM16 13h-3v4h-2v-4H8l4.01-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ifj5mc70d"/><path class="hl72ww78g"/><path class="cczwequ4g"/>`,
		"fallback": "ic:twotone-drive-folder-upload",
	});
}

export default Component;
