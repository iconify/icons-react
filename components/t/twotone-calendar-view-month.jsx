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
		"content": `<style>.b-4-fre7y {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4v-5h4zm0-7H4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4z");
}

.y2gz8uilm {
  fill: currentColor;
  d: path("M4 6h4v5H4zm0 7h4v5H4zm6 0h4v5h-4zm6 0h4v5h-4zm0-7h4v5h-4zm-6 0h4v5h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="y2gz8uilm"/><path class="b-4-fre7y"/>`,
		"fallback": "ic:twotone-calendar-view-month",
	});
}

export default Component;
