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
		"content": `<style>.o7q7bbb1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.265 18.382L43.5 29.618m-11.235 0L43.5 18.382m-16.198-5.617v22.47");
}

.vr_j8bbnl {
  cx: 13.325px;
  cy: 23.894px;
  r: 8.825px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vr_j8bbnl"/><path class="o7q7bbb1c"/>`,
		"fallback": "arcticons:olx",
	});
}

export default Component;
