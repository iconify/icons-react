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
		"content": `<style>.lg3p42byb {
  fill: currentColor;
  d: path("M18 16a6 6 0 1 1-12 0a1 1 0 0 1 2 0a3.95 3.95 0 0 0 .314 1.557A4 4 0 0 0 16 16V4a1 1 0 0 1 2 0Z");
}
</style><path class="lg3p42byb"/>`,
		"fallback": "coolicons:letter-j-fill-sharp",
	});
}

export default Component;
