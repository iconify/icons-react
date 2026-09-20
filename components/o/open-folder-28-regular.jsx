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
		"content": `<style>.qruqteb2g {
  fill: currentColor;
  d: path("M3 7.75A4.75 4.75 0 0 1 7.75 3h12.5A4.75 4.75 0 0 1 25 7.75v5.5a.75.75 0 0 1-1.5 0v-5.5a3.25 3.25 0 0 0-3.25-3.25H7.75A3.25 3.25 0 0 0 4.5 7.75v12.5a3.25 3.25 0 0 0 3.25 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5A4.75 4.75 0 0 1 3 20.25zm7.5 3.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-5.632l8.664 8.721a.75.75 0 1 1-1.064 1.058L12 13.003v5.747a.75.75 0 0 1-1.5 0z");
}
</style><path class="qruqteb2g"/>`,
		"fallback": "fluent:open-folder-28-regular",
	});
}

export default Component;
