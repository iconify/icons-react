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
		"content": `<style>.mgm6svima {
  fill: currentColor;
  d: path("M252 80v24a12 12 0 0 1-24 0V92h-91.68L91.24 212.21a12 12 0 0 1-22.47 0l-48-128a12 12 0 1 1 22.47-8.43l36.76 98l36.77-98A12 12 0 0 1 128 68h112a12 12 0 0 1 12 12");
}
</style><path class="mgm6svima"/>`,
		"fallback": "ph:radical-bold",
	});
}

export default Component;
