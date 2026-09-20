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
		"content": `<style>.kt7g70mnp {
  fill: currentColor;
  d: path("m214.2 118.18l-30.07 30.07a6 6 0 0 1-8.49-8.49l30.08-30.07a42 42 0 0 0-59.41-59.41l-30.07 30.06a6 6 0 0 1-8.49-8.49l30.07-30a54 54 0 0 1 76.38 76.38Zm-74.44 57.46l-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z");
}
</style><path class="kt7g70mnp"/>`,
		"fallback": "ph:link-simple-break-light",
	});
}

export default Component;
