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

.pfsydcgis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.609 31.5v-15h4.91c2.776 0 5.027 2.255 5.027 5.038s-2.25 5.037-5.027 5.037h-4.91m4.91 0l4.911 4.921m3.321-1.639c.92 1.197 2.073 1.643 3.678 1.643h2.22a3.74 3.74 0 0 0 3.742-3.742v-.016A3.74 3.74 0 0 0 31.65 24H29.2a3.746 3.746 0 0 1-3.746-3.746h0a3.754 3.754 0 0 1 3.754-3.754h2.209c1.604 0 2.758.446 3.677 1.643");
}
</style><rect class="j3s9ivbxi"/><path class="pfsydcgis"/>`,
		"fallback": "arcticons:round-sync",
	});
}

export default Component;
