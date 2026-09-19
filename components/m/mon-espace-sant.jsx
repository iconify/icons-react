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
		"content": `<style>.t926k4bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.508 42.5V12.363c.207-7.678 11.259-10.437 13.98 0v12.81m0-12.81c1.188-8.743 13.784-9.55 14.223 0v12.81l8.78.01");
}
</style><path class="t926k4bac"/>`,
		"fallback": "arcticons:mon-espace-sant",
	});
}

export default Component;
