import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sxqw2vk1f {
  cx: 37.535px;
  cy: 17.854px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.204px;
  ry: 1.861px;
}

.tv1bneb5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.855 9.668v5.128m0 8.812v5.703c-.167 5.218-3.998 8.616-9.022 9.022a9.02 9.02 0 0 1-9.022-9.022m0-6.51V9.667M5.5 29.744l24.56-9.47");
}
</style><path class="tv1bneb5e"/><ellipse transform="rotate(-18.752 37.535 17.854)" class="sxqw2vk1f"/>`,
		"fallback": "arcticons:udisc",
	});
}

export default Component;
