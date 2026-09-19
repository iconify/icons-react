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
		"content": `<style>.g24co2bzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h22.757M5.5 11.575V33.5m8.814 9h21.925M42.5 30.974V8.947M26.191 7.899v32.107");
}
</style><path class="g24co2bzo"/>`,
		"fallback": "arcticons:smart-scanner",
	});
}

export default Component;
