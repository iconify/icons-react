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

.iwhe1q3gp {
  fill: currentColor;
  d: path("M14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z");
  stroke: none;
}

.lu9u9u8wt {
  d: path("M12 3L2 21L22 21L12 3Z");
}
</style><g class="gp_8x1bzb"><path class="lu9u9u8wt"/><path class="iwhe1q3gp"/></g>`,
		"fallback": "keyline-icons:triangle-dot-sharp",
	});
}

export default Component;
