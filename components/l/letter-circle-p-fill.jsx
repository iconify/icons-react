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
		"content": `<style>.p-93jcdpi {
  fill: currentColor;
  d: path("M156 116a20 20 0 0 1-20 20h-24V96h24a20 20 0 0 1 20 20m76 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-60-12a36 36 0 0 0-36-36h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 36-36");
}
</style><path class="p-93jcdpi"/>`,
		"fallback": "ph:letter-circle-p-fill",
	});
}

export default Component;
