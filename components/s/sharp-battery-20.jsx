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
		"content": `<style>.dtr_d0o8k {
  fill: currentColor;
  d: path("M7 17v5h10v-5z");
}

.vxlz0wo_h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v13h10z");
}
</style><path class="dtr_d0o8k"/><path class="vxlz0wo_h"/>`,
		"fallback": "ic:sharp-battery-20",
	});
}

export default Component;
