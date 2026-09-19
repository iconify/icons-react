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
		"content": `<style>.sf9ia_buh {
  fill: currentColor;
  d: path("M12 5.5c-3.89 0-6.95-.84-8.69-1.43A.993.993 0 0 0 2 5.02V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45A1 1 0 0 0 22 19V5c0-.68-.66-1.17-1.31-.95c-2.03.68-4.83 1.45-8.69 1.45");
}
</style><path class="sf9ia_buh"/>`,
		"fallback": "ic:outline-panorama-horizontal-select",
	});
}

export default Component;
