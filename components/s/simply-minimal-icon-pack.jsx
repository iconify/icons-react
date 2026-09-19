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

.ob7kt-xpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.676 16.21a13.05 13.05 0 0 1 10.494-5.279c7.218 0 14.13 4.919 14.13 15.739c0 10.54-4.918 18.83-16.3 18.83");
}
</style><circle class="cpk0fnbgt"/><path class="ob7kt-xpa"/>`,
		"fallback": "arcticons:simply-minimal-icon-pack",
	});
}

export default Component;
