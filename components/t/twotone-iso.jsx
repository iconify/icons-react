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
		"content": `<style>.c7df1w-qo {
  fill: currentColor;
  d: path("M12 15.5h5V17h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2zM19 19H5L19 5z");
}

.x68e-_ffr {
  fill: currentColor;
  d: path("M19 19V5L5 19zm-2-3.5V17h-5v-1.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x68e-_ffr"/><path class="c7df1w-qo"/>`,
		"fallback": "ic:twotone-iso",
	});
}

export default Component;
