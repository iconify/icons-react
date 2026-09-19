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
		"content": `<style>.g8_0hfy_c {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z");
}

.lmzj5_e3a {
  fill: currentColor;
  d: path("M6 5h3v14H6zm9 0h3v14h-3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="lmzj5_e3a"/><path class="g8_0hfy_c"/>`,
		"fallback": "ic:twotone-curtains-closed",
	});
}

export default Component;
