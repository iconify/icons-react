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
		"content": `<style>.p8ivdvbnd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v11h10z");
}

.zmp46gb-r {
  fill: currentColor;
  d: path("M7 15v7h10v-7z");
}
</style><path class="p8ivdvbnd"/><path class="zmp46gb-r"/>`,
		"fallback": "ic:sharp-battery-30",
	});
}

export default Component;
