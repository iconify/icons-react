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
		"content": `<style>.hjs_si8ps {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm8.707 2.707a.999.999 0 1 0-1.414-1.414l-3 3a.997.997 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414L8.414 12Zm6 0a.999.999 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414L14.414 12Z");
}
</style><path class="hjs_si8ps"/>`,
		"fallback": "coolicons:square-chevron-double-left-fill-round",
	});
}

export default Component;
