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
		"content": `<style>.j6ij0abqb {
  fill: currentColor;
  d: path("M5.75 3.5A2.25 2.25 0 0 0 3.5 5.75v3a.75.75 0 0 1-1.5 0v-3A3.75 3.75 0 0 1 5.75 2h3a.75.75 0 0 1 0 1.5zm0 21a2.25 2.25 0 0 1-2.25-2.25v-3a.75.75 0 0 0-1.5 0v3A3.75 3.75 0 0 0 5.75 26h3a.75.75 0 0 0 0-1.5zM24.5 5.75a2.25 2.25 0 0 0-2.25-2.25h-3a.75.75 0 0 1 0-1.5h3A3.75 3.75 0 0 1 26 5.75v3a.75.75 0 0 1-1.5 0zM22.25 24.5a2.25 2.25 0 0 0 2.25-2.25v-3a.75.75 0 0 1 1.5 0v3A3.75 3.75 0 0 1 22.25 26h-3a.75.75 0 0 1 0-1.5zM8 8.75A.75.75 0 0 1 8.75 8h10.5a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8.75M8.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM8 18.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75");
}
</style><path class="j6ij0abqb"/>`,
		"fallback": "fluent:scan-text-28-regular",
	});
}

export default Component;
