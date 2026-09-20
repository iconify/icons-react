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
		"content": `<style>.nz0wfmbnk {
  fill: currentColor;
  d: path("M9.75 2A2.75 2.75 0 0 0 7 4.75v18.5A2.75 2.75 0 0 0 9.75 26h8.5A2.75 2.75 0 0 0 21 23.25V4.75A2.75 2.75 0 0 0 18.25 2zM8.5 4.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v18.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM12.25 21a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="nz0wfmbnk"/>`,
		"fallback": "fluent:phone-28-regular",
	});
}

export default Component;
