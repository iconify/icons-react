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
		"content": `<style>.zqnvmhzbc {
  fill: currentColor;
  d: path("M9 10h9V7H9zM3 21V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="zqnvmhzbc"/>`,
		"fallback": "material-symbols:position-top-right-outline-sharp",
	});
}

export default Component;
