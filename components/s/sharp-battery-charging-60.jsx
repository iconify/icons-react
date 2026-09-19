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
		"content": `<style>.ipfvtgbrq {
  fill: currentColor;
  d: path("M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4z");
}

.lyow0wb0a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4z");
}
</style><path class="lyow0wb0a"/><path class="ipfvtgbrq"/>`,
		"fallback": "ic:sharp-battery-charging-60",
	});
}

export default Component;
