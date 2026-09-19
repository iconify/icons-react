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
		"content": `<style>.gy9esjbwp {
  fill: currentColor;
  d: path("M15.67 17H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kxegz227v {
  fill: currentColor;
  d: path("M3 21h18v-6H3zm12.67-4H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5zm1-7l1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2L2 6z");
}
</style><path class="gy9esjbwp"/><path class="kxegz227v"/>`,
		"fallback": "ic:twotone-repartition",
	});
}

export default Component;
