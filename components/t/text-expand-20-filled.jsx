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
		"content": `<style>.ul-lypb8d {
  fill: currentColor;
  d: path("M4.75 3.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM4 16.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75m7-4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0-4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M5.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M6 8.5V10h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V11H3.5a.5.5 0 0 1 0-1H5V8.5a.5.5 0 0 1 1 0");
}
</style><path class="ul-lypb8d"/>`,
		"fallback": "fluent:text-expand-20-filled",
	});
}

export default Component;
