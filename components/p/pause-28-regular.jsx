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
		"content": `<style>.zkuatjb7r {
  fill: currentColor;
  d: path("M6.75 3A2.75 2.75 0 0 0 4 5.75v16.5A2.75 2.75 0 0 0 6.75 25h3a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 9.75 3zM5.5 5.75c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v16.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM18.25 3a2.75 2.75 0 0 0-2.75 2.75v16.5A2.75 2.75 0 0 0 18.25 25h3A2.75 2.75 0 0 0 24 22.25V5.75A2.75 2.75 0 0 0 21.25 3zM17 5.75c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v16.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25z");
}
</style><path class="zkuatjb7r"/>`,
		"fallback": "fluent:pause-28-regular",
	});
}

export default Component;
