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
		"content": `<style>.y724mwbyd {
  fill: currentColor;
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zM9.499 17.762a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.5 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.5 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="y724mwbyd"/>`,
		"fallback": "fluent:phone-pagination-24-filled",
	});
}

export default Component;
