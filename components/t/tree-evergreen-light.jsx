import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.enonn_0cv {
  fill: currentColor;
  d: path("M228.74 188.32L180.27 126H208a6 6 0 0 0 4.76-9.66l-80-104a6 6 0 0 0-9.52 0l-80 104A6 6 0 0 0 48 126h27.73l-48.47 62.32A6 6 0 0 0 32 198h90v42a6 6 0 0 0 12 0v-42h90a6 6 0 0 0 4.74-9.68M44.27 186l48.47-62.32A6 6 0 0 0 88 114H60.19L128 25.84L195.81 114H168a6 6 0 0 0-4.74 9.68L211.73 186Z");
}
</style><path class="enonn_0cv"/>`,
		"fallback": "ph:tree-evergreen-light",
	});
}

export default Component;
