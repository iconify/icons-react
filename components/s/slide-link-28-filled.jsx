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
		"content": `<style>.n8wc_kb1v {
  fill: currentColor;
  d: path("M18.25 18.5a.75.75 0 0 1 0 1.5h-.5a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5zm5 0a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5zM22.247 4a3.75 3.75 0 0 1 3.75 3.75V11H26v7.378a4.73 4.73 0 0 0-2.75-.878h-5.5a4.75 4.75 0 0 0-4.416 6.5H5.75A3.75 3.75 0 0 1 2 20.25V7.75A3.75 3.75 0 0 1 5.75 4zm1.003 17.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="n8wc_kb1v"/>`,
		"fallback": "fluent:slide-link-28-filled",
	});
}

export default Component;
