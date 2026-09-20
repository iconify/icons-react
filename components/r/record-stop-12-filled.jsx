import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pc2-9o02t {
  fill: currentColor;
  d: path("M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10M5 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1");
}
</style><path class="pc2-9o02t"/>`,
		"fallback": "fluent:record-stop-12-filled",
	});
}

export default Component;
