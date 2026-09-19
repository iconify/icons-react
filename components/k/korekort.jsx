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

.e16q1bbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 31.25V16.73h3.27c3.51 0 6.35 2.84 6.35 6.35v1.81c0 3.51-2.84 6.35-6.35 6.35H13.5Zm13.2-14.5v14.52m0-5.06l7.8-9.41m0 14.47l-5.98-7.26");
}
</style><circle class="cpk0fnbgt"/><path class="e16q1bbly"/>`,
		"fallback": "arcticons:korekort",
	});
}

export default Component;
