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
		"content": `<style>.ownqvcbkf {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5h14v14zm5-2h5V7H9v6h4v2h-3zm3-6h-2V9h2z");
}
</style><path class="ownqvcbkf"/>`,
		"fallback": "material-symbols:looks-9-sharp",
	});
}

export default Component;
