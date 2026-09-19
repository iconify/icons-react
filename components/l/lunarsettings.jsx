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
		"content": `<style>.qbec7vbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.998 45.5a21.5 21.5 0 0 1 0-43z");
}

.wv21wkb3s {
  cx: 24px;
  cy: 24px;
  r: 11.727px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="wv21wkb3s"/><path class="qbec7vbmy"/>`,
		"fallback": "arcticons:lunarsettings",
	});
}

export default Component;
