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

.in-kiw_rm {
  d: path("M1.7191 4.7593L9.0001 11L1.6508 17.2993M19 4L19 12M15 8L23 8");
}

.lb1jov5wm {
  stroke-opacity: 0.4;
  d: path("M19 19L10 19");
}
</style><g class="gp_8x1bzb"><path class="in-kiw_rm"/><path class="lb1jov5wm"/></g>`,
		"fallback": "keyline-icons:terminal-plus-sharp-duotone",
	});
}

export default Component;
