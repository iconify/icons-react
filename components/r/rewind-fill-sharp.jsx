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
		"content": `<style>.dd8z2ibod {
  fill: currentColor;
  d: path("M13 7v3.3l7.514-4.174A1 1 0 0 1 22 7v10a1 1 0 0 1-1.486.874L13 13.7V17a1 1 0 0 1-1.486.874l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 13 7");
}
</style><path class="dd8z2ibod"/>`,
		"fallback": "coolicons:rewind-fill-sharp",
	});
}

export default Component;
