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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.q42o9pjqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 28.447v-8.894h2.912c1.646 0 2.98 1.337 2.98 2.987s-1.334 2.987-2.98 2.987H10.5m11.124-.026h-3.94m-.976 2.946l2.946-8.894l2.946 8.894m1.734-.974c.545.71 1.23.974 2.18.974h1.317a2.22 2.22 0 0 0 2.22-2.219v-.007a2.22 2.22 0 0 0-2.22-2.219H26.38a2.22 2.22 0 0 1-2.221-2.221h0c0-1.23.996-2.226 2.226-2.226h1.31c.95 0 1.635.265 2.18.975m1.909 6.943c.545.71 1.23.974 2.18.974h1.317a2.22 2.22 0 0 0 2.219-2.219v-.007a2.22 2.22 0 0 0-2.219-2.219H33.83a2.22 2.22 0 0 1-2.221-2.221h0c0-1.23.996-2.226 2.225-2.226h1.31c.952 0 1.635.265 2.18.975");
}
</style><rect class="j3s9ivbxi"/><path class="q42o9pjqp"/>`,
		"fallback": "arcticons:pass-by-skt",
	});
}

export default Component;
