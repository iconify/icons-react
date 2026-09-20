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
		"content": `<style>.cgpsgj6_f {
  fill: currentColor;
  d: path("M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}
</style><path class="cgpsgj6_f"/>`,
		"fallback": "fluent:record-12-filled",
	});
}

export default Component;
