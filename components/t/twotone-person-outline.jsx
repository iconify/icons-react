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
		"content": `<style>.bxvk51bxs {
  cx: 12px;
  cy: 8px;
  r: 2.1px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.x0m3q7bnn {
  fill: currentColor;
  d: path("M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.x1ose62_x {
  fill: currentColor;
  d: path("M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6.1a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2");
}
</style><circle class="bxvk51bxs"/><path class="x0m3q7bnn"/><path class="x1ose62_x"/>`,
		"fallback": "ic:twotone-person-outline",
	});
}

export default Component;
