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

.i-8ztv1kh {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9M9 9L9 21");
}

.zyu_ccbvv {
  fill: currentColor;
  d: path("M3 3L21 3L21 9L3 9L3 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="zyu_ccbvv"/><path class="i-8ztv1kh"/></g>`,
		"fallback": "keyline-icons:panels-top-left-sharp-fill",
	});
}

export default Component;
