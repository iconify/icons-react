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
		"content": `<style>.ercr9nyht {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17z");
}

.xt_mqcbkw {
  fill: currentColor;
  d: path("M11 20v-3H7v5h10v-5h-4.4z");
}
</style><path class="xt_mqcbkw"/><path class="ercr9nyht"/>`,
		"fallback": "ic:sharp-battery-charging-20",
	});
}

export default Component;
