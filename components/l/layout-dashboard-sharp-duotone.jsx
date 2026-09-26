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
		"content": `<style>.zy5wuebdp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L10 3L10 12L3 12L3 3ZM3 16L10 16L10 21L3 21L3 16ZM14 3L21 3L21 8L14 8L14 3ZM14 12L21 12L21 21L14 21L14 12Z");
}
</style><path class="zy5wuebdp"/>`,
		"fallback": "keyline-icons:layout-dashboard-sharp-duotone",
	});
}

export default Component;
