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
		"content": `<style>.c7bexc8rm {
  stroke-opacity: 0.4;
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zvepp4dfu {
  d: path("M8.7071 16.2929L12 13L15.2929 16.2929");
}
</style><g class="gp_8x1bzb"><path class="c7bexc8rm"/><path class="zvepp4dfu"/></g>`,
		"fallback": "keyline-icons:panel-top-close-sharp-duotone",
	});
}

export default Component;
