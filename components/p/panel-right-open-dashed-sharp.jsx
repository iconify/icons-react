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
		"content": `<style>.a98c3lbqv {
  d: path("M11.2929 8.7071L8 12L11.2929 15.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xsa8rjksl {
  d: path("M15 3L21 3L21 21L15 21L15 3ZM7 3L3 3L3 7M3 17L3 21L7 21M9 3L12 3M9 21L12 21M3 9.5L3 14.5");
}
</style><g class="gp_8x1bzb"><path class="xsa8rjksl"/><path class="a98c3lbqv"/></g>`,
		"fallback": "keyline-icons:panel-right-open-dashed-sharp",
	});
}

export default Component;
