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
		"content": `<style>.hj-44zbru {
  fill: currentColor;
  d: path("m16.293 12.293l2-2a3.243 3.243 0 0 0-4.586-4.586l-2 2a.999.999 0 1 1-1.414-1.414l2-2a5.243 5.243 0 0 1 7.414 7.414l-2 2a.999.999 0 1 1-1.414-1.414m-9 3l8-8a.999.999 0 1 1 1.414 1.414l-8 8a.999.999 0 1 1-1.414-1.414m.414-3.586l-2 2a3.243 3.243 0 0 0 4.586 4.586l2-2a.999.999 0 1 1 1.414 1.414l-2 2a5.243 5.243 0 0 1-7.414-7.414l2-2a.999.999 0 1 1 1.414 1.414");
}
</style><path class="hj-44zbru"/>`,
		"fallback": "coolicons:link-fill",
	});
}

export default Component;
