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
		"content": `<style>.mgstzpbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 14.5a6 6 0 0 1 12 0m-17.7 0v25m23.4-25v25m-14.35-10v-8h2.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686H21.35m2.62 0l2.62 2.625m-6.24 1.652l7.24-.002l-5.84 1.352z");
}

.wyhtv4b6c {
  width: 39px;
  height: 25px;
  x: 4.5px;
  y: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><rect class="wyhtv4b6c"/><path class="mgstzpbdu"/>`,
		"fallback": "arcticons:rakuten-travel",
	});
}

export default Component;
