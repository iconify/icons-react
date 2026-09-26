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

.ift3yubeo {
  d: path("M3 9L3 3L21 3L21 9L3 9ZM3 17L3 21L7 21M17 21L21 21L21 17M3 12L3 15M21 12L21 15M9.5 21L14.5 21");
}

.zvepp4dfu {
  d: path("M8.7071 16.2929L12 13L15.2929 16.2929");
}
</style><g class="gp_8x1bzb"><path class="ift3yubeo"/><path class="zvepp4dfu"/></g>`,
		"fallback": "keyline-icons:panel-top-close-dashed-sharp",
	});
}

export default Component;
