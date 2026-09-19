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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s7bgdkb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.375 19.788h19.656m-19.656 5.989h11.832m2.608 3.189h2.67a2.67 2.67 0 0 1 2.67 2.67v0a2.67 2.67 0 0 1-2.67 2.67h0a2.67 2.67 0 0 1-2.67-2.67zm-16.951-6.294v2.67a2.67 2.67 0 0 1-2.67 2.67h0a2.67 2.67 0 0 1-2.67-2.67h0a2.67 2.67 0 0 1 2.67-2.67z");
}
</style><circle class="cpk0fnbgt"/><path class="s7bgdkb7o"/>`,
		"fallback": "arcticons:universalcopy",
	});
}

export default Component;
