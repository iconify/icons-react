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
		"content": `<style>.lxblhacsi {
  fill: currentColor;
  d: path("M19 11h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.mnybmzb7r {
  fill: currentColor;
  d: path("M3 5v14h18V5zm16 6h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z");
}
</style><path class="lxblhacsi"/><path class="mnybmzb7r"/>`,
		"fallback": "ic:twotone-view-module",
	});
}

export default Component;
