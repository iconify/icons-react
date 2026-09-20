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
		"content": `<style>.gq9hnxbba {
  fill: currentColor;
  d: path("M10 2a3 3 0 0 0-.5 5.96V9.5h-3A1.5 1.5 0 0 0 5 11v1.042a3.001 3.001 0 1 0 1 0V11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.042a3.001 3.001 0 1 0 1 0V11a1.5 1.5 0 0 0-1.5-1.5h-3V7.96A3.001 3.001 0 0 0 10 2M8 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0M3.5 15a2 2 0 1 1 4.001 0A2 2 0 0 1 3.5 15m11-2a2 2 0 1 1 0 4.001a2 2 0 0 1 0-4.001");
}
</style><path class="gq9hnxbba"/>`,
		"fallback": "fluent:organization-20-regular",
	});
}

export default Component;
