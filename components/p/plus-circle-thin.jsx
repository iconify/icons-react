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
		"content": `<style>.gzoq8rb3a {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-92a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H88a4 4 0 0 1 0-8h36V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4");
}
</style><path class="gzoq8rb3a"/>`,
		"fallback": "ph:plus-circle-thin",
	});
}

export default Component;
