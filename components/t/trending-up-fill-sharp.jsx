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
		"content": `<style>.zex2atbgi {
  fill: currentColor;
  d: path("M21 6a.997.997 0 0 1 1 1v6a1 1 0 0 1-2 0V9.414l-6.293 6.293a1 1 0 0 1-1.414 0L9 12.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13 13.586L18.586 8H15a1 1 0 0 1 0-2Z");
}
</style><path class="zex2atbgi"/>`,
		"fallback": "coolicons:trending-up-fill-sharp",
	});
}

export default Component;
