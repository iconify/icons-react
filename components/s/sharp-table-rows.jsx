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
		"content": `<style>.i43b3bb4i {
  fill: currentColor;
  d: path("M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z");
}
</style><path class="i43b3bb4i"/>`,
		"fallback": "ic:sharp-table-rows",
	});
}

export default Component;
