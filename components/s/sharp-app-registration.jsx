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
		"content": `<style>.adrwyibhd {
  fill: currentColor;
  d: path("M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97l-2.12-2.12zm3-5.83V10h-4v4h2.03zm3.671-.824l1.415-1.414l2.12 2.12l-1.413 1.415z");
}
</style><path class="adrwyibhd"/>`,
		"fallback": "ic:sharp-app-registration",
	});
}

export default Component;
