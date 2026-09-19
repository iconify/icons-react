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
		"content": `<style>.k7ookzc3k {
  fill: currentColor;
  d: path("M2 9v6h5.5l3-3l-3-3zm4.67 4H4v-2h2.67l1 1zM22 9h-5.5l-3 3l3 3H22zm-2 4h-2.67l-1-1l1-1H20zm-5 3.5l-3-3l-3 3V22h6zM13 20h-2v-2.67l1-1l1 1zM9 7.5l3 3l3-3V2H9zM11 4h2v2.67l-1 1l-1-1z");
}

.ztyre86cb {
  fill: currentColor;
  d: path("M11 17.33V20h2v-2.67l-1-1zm2-10.66V4h-2v2.67l1 1zM16.33 12l1 1H20v-2h-2.67zM4 11v2h2.67l1-1l-1-1z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ztyre86cb"/><path class="k7ookzc3k"/>`,
		"fallback": "ic:twotone-games",
	});
}

export default Component;
