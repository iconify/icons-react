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
		"content": `<style>.ewgww3boa {
  fill: currentColor;
  d: path("M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7V5h10z");
}
</style><path class="ewgww3boa"/>`,
		"fallback": "ic:outline-crop-portrait",
	});
}

export default Component;
