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

.drltjsbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.606 27.849v-7.796l3.947 7.894l3.947-7.894v7.894m-35 0v-7.894h2.566c1.48 0 2.664 1.184 2.664 2.664s-1.184 2.665-2.664 2.665H6.5m25.173-5.329l-2.566 7.894l-2.566-7.894m-12.487.987v5.92c0 .592.395.987.987.987h.296m-2.368-5.328h2.17m10.514 2.664h-3.552m-.888 2.664l2.664-7.894l2.664 7.894M17.66 21.04v5.92c0 .592.395.987.987.987h.296m-2.368-5.328h2.171");
}
</style><circle class="cpk0fnbgt"/><path class="drltjsbzl"/>`,
		"fallback": "arcticons:pttavm",
	});
}

export default Component;
