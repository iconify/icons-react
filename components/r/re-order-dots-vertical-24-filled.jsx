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
		"content": `<style>.fe-6x4qdh {
  fill: currentColor;
  d: path("M16 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="fe-6x4qdh"/>`,
		"fallback": "fluent:re-order-dots-vertical-24-filled",
	});
}

export default Component;
