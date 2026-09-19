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
		"content": `<style>.ohui6im3n {
  fill: currentColor;
  d: path("M19 8H5v14h14zm-6 12.5h-2V19h2zm0-2.5h-2c0-1.5-2.5-3-2.5-5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5m5-11.5H6V5h12zm-1-3H7V2h10z");
}
</style><path class="ohui6im3n"/>`,
		"fallback": "ic:sharp-batch-prediction",
	});
}

export default Component;
