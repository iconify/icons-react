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

.drin70bjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.808 7a17 17 0 0 0-4.603.648a16.988 16.988 0 0 1-.013 32.7a16.96 16.96 0 0 0 21.616-16.346V24A17 17 0 0 0 23.81 7Z");
}
</style><circle class="cpk0fnbgt"/><path class="drin70bjp"/>`,
		"fallback": "arcticons:timepassages",
	});
}

export default Component;
