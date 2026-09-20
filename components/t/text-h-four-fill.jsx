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
		"content": `<style>.o-1d93bfz {
  fill: currentColor;
  d: path("M164.46 144L184 119.13V144ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-96 32a8 8 0 0 0-16 0v32H72V80a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm84 72a8 8 0 0 0-8-8h-4V96a8 8 0 0 0-14.29-4.94l-44 56A8 8 0 0 0 148 160h36v16a8 8 0 0 0 16 0v-16h4a8 8 0 0 0 8-8");
}
</style><path class="o-1d93bfz"/>`,
		"fallback": "ph:text-h-four-fill",
	});
}

export default Component;
