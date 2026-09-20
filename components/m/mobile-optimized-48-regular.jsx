import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tkixhbcnn {
  fill: currentColor;
  d: path("M10.75 4c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-5.5a1.25 1.25 0 1 1 0-2.5H9.5V5.25c0-.69.56-1.25 1.25-1.25m26.5 0c.69 0 1.25.56 1.25 1.25V9.5h4.25a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25v-5.5c0-.69.56-1.25 1.25-1.25M16.5 12a2.5 2.5 0 0 0-2.5 2.5v19a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-19a2.5 2.5 0 0 0-2.5-2.5zm0 2.5h15v19h-15zm3.75 4.5a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm0 5a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5zM12 42.75a1.25 1.25 0 1 1-2.5 0V38.5H5.25a1.25 1.25 0 1 1 0-2.5h5.5c.69 0 1.25.56 1.25 1.25zm26.5 0a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5H38.5z");
}
</style><path class="tkixhbcnn"/>`,
		"fallback": "fluent:mobile-optimized-48-regular",
	});
}

export default Component;
