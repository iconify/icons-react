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
		"content": `<style>.bffvqy7ok {
  fill: currentColor;
  d: path("m10 10.327l2-1l2 1V5h-4zM7 16.5v-1h5v1zM4 20V4h16v16zM5 5v14zm0 14h14V5h-4v6.962l-3-1.5l-3 1.5V5H5z");
}
</style><path class="bffvqy7ok"/>`,
		"fallback": "material-symbols-light:package-outline-sharp",
	});
}

export default Component;
