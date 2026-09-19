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
		"content": `<style>.n7kjzubbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5c11.825 0 21.5-9.675 21.5-21.5S35.825 2.5 24 2.5S2.5 12.175 2.5 24S12.175 45.5 24 45.5m14.298-19.672c0 6.88-5.59 12.577-12.578 12.577s-12.47-5.697-12.47-12.577c0-1.29.215-2.473.537-3.655c.968 2.15 3.225 3.655 5.698 3.655a6.24 6.24 0 0 0 6.235-6.235a6.2 6.2 0 0 0-3.655-5.698c1.182-.322 2.365-.537 3.655-.537c6.988-.108 12.578 5.482 12.578 12.47");
}
</style><path class="n7kjzubbr"/>`,
		"fallback": "arcticons:overseerr",
	});
}

export default Component;
