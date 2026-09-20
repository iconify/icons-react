import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f2w3qqb8k {
  fill: currentColor;
  d: path("M15.5 2A2.5 2.5 0 0 1 18 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 13.5v-9A2.5 2.5 0 0 1 6.5 2zm-5 4.5v2h-2a.5.5 0 1 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 1 0 0-1h-2v-2a.5.5 0 1 0-1 0m2 11.5c.954 0 1.818-.381 2.45-1H5.5A2.5 2.5 0 0 1 3 14.5V5.05c-.619.632-1 1.496-1 2.45v7A3.5 3.5 0 0 0 5.5 18z");
}
</style><path class="f2w3qqb8k"/>`,
		"fallback": "fluent:save-copy-20-filled",
	});
}

export default Component;
