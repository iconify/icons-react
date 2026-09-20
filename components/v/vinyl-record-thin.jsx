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
		"content": `<style>.j5clf5bsp {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60.07 60.07 0 0 0-60 60a4 4 0 0 1-8 0a68.07 68.07 0 0 1 68-68a4 4 0 0 1 0 8m68 60a68.07 68.07 0 0 1-68 68a4 4 0 0 1 0-8a60.07 60.07 0 0 0 60-60a4 4 0 0 1 8 0m-40 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20");
}
</style><path class="j5clf5bsp"/>`,
		"fallback": "ph:vinyl-record-thin",
	});
}

export default Component;
