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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tlk6yobhf {
  d: path("M6 12L6 22M12 12L12 22M18 12L18 22");
}

.w9xq8504s {
  stroke-opacity: 0.4;
  d: path("M11 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929M13 6L21 6M17.7071 2.7071L21 6L17.7071 9.2929");
}
</style><g class="gp_8x1bzb"><path class="w9xq8504s"/><path class="tlk6yobhf"/></g>`,
		"fallback": "keyline-icons:list-sort-horizontal-sharp-two-tone",
	});
}

export default Component;
