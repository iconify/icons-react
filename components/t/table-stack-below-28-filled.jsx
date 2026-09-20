import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mjnknglje {
  fill: currentColor;
  d: path("M3.75 23.5a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5zM25 11v5a1 1 0 0 1-1 1h-5.5v-6zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M11 3h6v6.5h-6zM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3M4 17a1 1 0 0 1-1-1v-5h6.5v6zm13-6h-6v6h6z");
}
</style><path class="mjnknglje"/>`,
		"fallback": "fluent:table-stack-below-28-filled",
	});
}

export default Component;
