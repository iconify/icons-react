import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yt2jbmbha {
  fill: currentColor;
  d: path("M5 7h14a3 3 0 0 1 2.995 2.824L22 10v4a3 3 0 0 1-2.824 2.995L19 17H5a3 3 0 0 1-2.995-2.824L2 14v-4a3 3 0 0 1 2.824-2.995zh14zm14 1.5H5A1.5 1.5 0 0 0 3.5 10v4A1.5 1.5 0 0 0 5 15.5h14a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 19 8.5M18 10a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="yt2jbmbha"/>`,
		"fallback": "fluent:storage-24-regular",
	});
}

export default Component;
