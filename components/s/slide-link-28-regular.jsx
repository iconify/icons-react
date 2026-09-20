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
		"content": `<style>.y_o7nru7y {
  fill: currentColor;
  d: path("M18.25 18.5a.75.75 0 0 1 0 1.5h-.5a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5zm5 0a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5zM22.247 4a3.75 3.75 0 0 1 3.75 3.75V13H26v5.378a4.7 4.7 0 0 0-1.5-.711v-3.51l-.003-.002V7.75a2.25 2.25 0 0 0-2.25-2.25H5.75A2.25 2.25 0 0 0 3.5 7.75v12.5a2.25 2.25 0 0 0 2.25 2.25h7.256a4.7 4.7 0 0 0 .328 1.5H5.75A3.75 3.75 0 0 1 2 20.25V7.75A3.75 3.75 0 0 1 5.75 4zm1.003 17.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="y_o7nru7y"/>`,
		"fallback": "fluent:slide-link-28-regular",
	});
}

export default Component;
