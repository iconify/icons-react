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

.h5zq5sxkr {
  d: path("M12.7071 8.7071L16 12L12.7071 15.2929");
}

.lzd54cadi {
  d: path("M9 3L3 3L3 21L9 21L9 3ZM17 3L21 3L21 7M21 17L21 21L17 21M12 3L15 3M12 21L15 21M21 9.5L21 14.5");
}
</style><g class="gp_8x1bzb"><path class="lzd54cadi"/><path class="h5zq5sxkr"/></g>`,
		"fallback": "keyline-icons:panel-left-open-dashed-sharp",
	});
}

export default Component;
