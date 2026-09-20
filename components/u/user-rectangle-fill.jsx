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
		"content": `<style>.zx_9jtdiy {
  fill: currentColor;
  d: path("M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44m60-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144h14.68a80 80 0 0 1 29.41-34.84a4 4 0 0 1 4.83.31a59.82 59.82 0 0 0 78.16 0a4 4 0 0 1 4.83-.31A80 80 0 0 1 201.32 200z");
}
</style><path class="zx_9jtdiy"/>`,
		"fallback": "ph:user-rectangle-fill",
	});
}

export default Component;
