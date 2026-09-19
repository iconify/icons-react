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
		"content": `<style>.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ruocc3coy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24v14.5c0 2.216-1.784 4-4 4H24M5.5 24V9.5c0-2.216 1.784-4 4-4H24");
}

.zut_6o5gt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.004 31.978V16.004L24 31.996l7.996-15.968v15.968");
}
</style><path class="ruocc3coy"/><circle class="l6cd208_p"/><path class="zut_6o5gt"/>`,
		"fallback": "arcticons:mobile-tracker-free-client",
	});
}

export default Component;
