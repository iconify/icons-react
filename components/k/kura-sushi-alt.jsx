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

.javclrm7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.5 9.375L7.875 24L22.5 38.625v-9.063L16.937 24l5.563-5.562zm3 0v9.063L31.062 24L25.5 29.562v9.063L40.125 24z");
}

.q04ibibrl {
  cx: 24px;
  cy: 24px;
  r: 16.125px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="q04ibibrl"/><path class="javclrm7a"/>`,
		"fallback": "arcticons:kura-sushi-alt",
	});
}

export default Component;
