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
		"content": `<style>.h5tlkubht {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-2 17H7V6h10zm-9-8h8v1.5H8zm1 3h6v1.5H9z");
}
</style><path class="h5tlkubht"/>`,
		"fallback": "ic:sharp-aod",
	});
}

export default Component;
