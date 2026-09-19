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
		"content": `<style>.amiif-b9a {
  fill: currentColor;
  d: path("M15 6H4v12.01h16V11h-5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ogzgctwmp {
  fill: currentColor;
  d: path("M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zm16 14.01H4V6h11v5h5z");
}
</style><path class="amiif-b9a"/><path class="ogzgctwmp"/>`,
		"fallback": "ic:twotone-note",
	});
}

export default Component;
