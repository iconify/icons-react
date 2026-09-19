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
		"content": `<style>.khfwpopyv {
  fill: currentColor;
  d: path("M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2m4-4h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M7 3h14v14H7zm8 6h-2V5h-2v6h4v4h2V5h-2z");
}

.xzcxutbmj {
  fill: currentColor;
  d: path("M21 3H7v14h14zm-4 12h-2v-4h-4V5h2v4h2V5h2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="xzcxutbmj"/><path class="khfwpopyv"/>`,
		"fallback": "ic:twotone-filter-4",
	});
}

export default Component;
