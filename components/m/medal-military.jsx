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
		"content": `<style>.q0y_ksyum {
  fill: currentColor;
  d: path("M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17m-47 16v72.67l-32 14.54l-32-14.54V56ZM48 106.21V57a1 1 0 0 1 1-1h31v65.39l-31.41-14.27a1 1 0 0 1-.59-.91M128 224a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80-117.79a1 1 0 0 1-.59.91L176 121.39V56h31a1 1 0 0 1 1 1Z");
}
</style><path class="q0y_ksyum"/>`,
		"fallback": "ph:medal-military",
	});
}

export default Component;
