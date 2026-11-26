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
		"content": `<style>.mj_wvt38c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L19 3L19 8L5 8ZM2 12L22 12M5 16L19 16L19 21L5 21Z");
}
</style><path class="mj_wvt38c"/>`,
		"fallback": "keyline-icons:separator-horizontal-sharp",
	});
}

export default Component;
