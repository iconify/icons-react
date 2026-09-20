import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z8oob-b2b {
  fill: currentColor;
  d: path("M10.742 4.897c1.438-2.529 5.083-2.529 6.52 0L25.506 19.4c1.42 2.5-.385 5.602-3.26 5.603H5.76c-2.875 0-4.68-3.103-3.26-5.603zM14.002 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75");
}
</style><path class="z8oob-b2b"/>`,
		"fallback": "fluent:warning-28-filled",
	});
}

export default Component;
