import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kodf7cbhp {
  fill: currentColor;
  d: path("M18 20q0-2.9-1.1-5.45t-3-4.45t-4.45-3T4 6V4q3.3 0 6.213 1.263T15.3 8.7t3.438 5.088T20 20z");
}
</style><path class="kodf7cbhp"/>`,
		"fallback": "material-symbols:line-curve",
	});
}

export default Component;
