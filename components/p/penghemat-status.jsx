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

.heisu3bmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.735 12.381h7.954v12.557h5.553l-9.417 10.78l-9.417-10.78h5.327z");
}
</style><circle class="cpk0fnbgt"/><path class="heisu3bmj"/>`,
		"fallback": "arcticons:penghemat-status",
	});
}

export default Component;
