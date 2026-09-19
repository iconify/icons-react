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
		"content": `<style>.cju73ibbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 21.3A5.3 5.3 0 0 0 24 16h0a5.3 5.3 0 0 0-5.3 5.3v5.4A5.3 5.3 0 0 0 24 32h0a5.3 5.3 0 0 0 5.3-5.3H24");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="cju73ibbf"/>`,
		"fallback": "arcticons:letter-uppercase-circle-g",
	});
}

export default Component;
