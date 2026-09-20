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
		"content": `<style>.hf9ticbfa {
  fill: currentColor;
  d: path("M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.207a5.5 5.5 0 0 1-.185-1H8.5V8H17v1.6q.538.276 1 .657V6a3 3 0 0 0-3-3zm12 4H8.5V4H15a2 2 0 0 1 2 2zM5 4h2.5v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="hf9ticbfa"/>`,
		"fallback": "fluent:panel-left-header-add-20-regular",
	});
}

export default Component;
