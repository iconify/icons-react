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

.evhhslgiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.377 14.574L20.333 26.577a.594.594 0 0 1-.836-.077l-4.861-5.842M9.5 24.944l5.135-4.286m.711 10.111l5.135-4.286m13.896-11.909l4.123 4.663");
}

.x-ihj8qmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 19.237L23.086 32.064a5.89 5.89 0 0 1-8.294-.76L9.5 24.944");
}
</style><path class="x-ihj8qmb"/><path class="evhhslgiz"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:samsung-reminder",
	});
}

export default Component;
