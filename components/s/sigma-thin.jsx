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
		"content": `<style>.yp71pdb6o {
  fill: currentColor;
  d: path("M188 72V52H72.32l58.8 73.5a4 4 0 0 1 0 5L72.32 204H188v-20a4 4 0 0 1 8 0v24a4 4 0 0 1-4 4H64a4 4 0 0 1-3.12-6.5l62-77.5l-62-77.5A4 4 0 0 1 64 44h128a4 4 0 0 1 4 4v24a4 4 0 0 1-8 0");
}
</style><path class="yp71pdb6o"/>`,
		"fallback": "ph:sigma-thin",
	});
}

export default Component;
