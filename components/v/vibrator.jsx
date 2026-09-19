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
		"content": `<style>.hqewiuu-n {
  d: path("m15.218 9.518l-8.651 8.177l8.473 8.234l-8.235 7.942l8.828 8.629m17.532-37l8.237 7.851l-8.205 8.004l8.236 8.236l-8.682 8.357");
}

.i486f_nug {
  cx: 23.994px;
  cy: 23.707px;
  r: 3.364px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="hqewiuu-n"/><circle class="i486f_nug"/></g>`,
		"fallback": "arcticons:vibrator",
	});
}

export default Component;
