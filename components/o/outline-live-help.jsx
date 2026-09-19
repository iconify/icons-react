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
		"content": `<style>.mnpnrpbvg {
  fill: currentColor;
  d: path("M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3l3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16h-4.83l-.59.59L12 20.17l-1.59-1.59l-.58-.58H5V4h14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2");
}
</style><path class="mnpnrpbvg"/>`,
		"fallback": "ic:outline-live-help",
	});
}

export default Component;
