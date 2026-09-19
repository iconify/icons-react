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
		"content": `<style>.l_uizsnjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.07 40.702l3.575-33.403H9.23L5.5 40.702Zm10.824 0l-6.144-13.65l1.747-16.194l4.435 9.26l5.85-12.82h7.057L42.5 40.701h-9.011L31.72 27.16Z");
}
</style><path class="l_uizsnjc"/>`,
		"fallback": "arcticons:metrobank",
	});
}

export default Component;
