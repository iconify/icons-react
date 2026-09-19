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

.rg62lybzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.372 32V18.8a2.8 2.8 0 0 1 2.8-2.8h0c1.378 0 2.238.408 2.828 1.172M20 21.4h5.6");
}
</style><circle class="cpk0fnbgt"/><path class="rg62lybzf"/>`,
		"fallback": "arcticons:letter-lowercase-circle-f",
	});
}

export default Component;
