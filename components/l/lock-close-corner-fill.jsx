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
		"content": `<style>.u6nha1jxz {
  fill: currentColor;
  d: path("M6 8h1V7a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3a1 1 0 0 1-1 1h-7a.997.997 0 0 0-1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3m9 0V7a3 3 0 1 0-6 0v1Zm1.707 7.293L18 16.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L19.414 18l1.293 1.293a.999.999 0 1 1-1.414 1.414L18 19.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L16.586 18l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="u6nha1jxz"/>`,
		"fallback": "coolicons:lock-close-corner-fill",
	});
}

export default Component;
