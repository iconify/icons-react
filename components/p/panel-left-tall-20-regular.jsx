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
		"content": `<style>.lt-a19bqc {
  fill: currentColor;
  d: path("M15 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8.5 16H15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8.5zM5 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5V4z");
}
</style><path class="lt-a19bqc"/>`,
		"fallback": "fluent:panel-left-tall-20-regular",
	});
}

export default Component;
