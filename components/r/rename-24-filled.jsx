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
		"content": `<style>.na3vw322g {
  fill: currentColor;
  d: path("M14.25 2a.75.75 0 1 1 0 1.5h-1.5v17h1.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5v-17h-1.5a.75.75 0 0 1 0-1.5zm-4 17h-5A3.25 3.25 0 0 1 2 15.75v-7.5A3.25 3.25 0 0 1 5.25 5h5zm8.5-14A3.25 3.25 0 0 1 22 8.25v7.5A3.25 3.25 0 0 1 18.75 19h-5V5z");
}
</style><path class="na3vw322g"/>`,
		"fallback": "fluent:rename-24-filled",
	});
}

export default Component;
