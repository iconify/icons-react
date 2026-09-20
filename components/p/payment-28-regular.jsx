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
		"content": `<style>.p4kci_brx {
  fill: currentColor;
  d: path("M18.25 16.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM2.004 8.75A3.75 3.75 0 0 1 5.754 5H22.25A3.75 3.75 0 0 1 26 8.75v10.5A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.75H24.5v-.75a2.25 2.25 0 0 0-2.25-2.25zm-2.25 12.75a2.25 2.25 0 0 0 2.25 2.25H22.25a2.25 2.25 0 0 0 2.25-2.25V11H3.505z");
}
</style><path class="p4kci_brx"/>`,
		"fallback": "fluent:payment-28-regular",
	});
}

export default Component;
