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
		"content": `<style>.jiu1upb9y {
  fill: currentColor;
  d: path("M19 19V3H5v16H3v2h18v-2zm-8-6H9v-2h2z");
}
</style><path class="jiu1upb9y"/>`,
		"fallback": "ic:sharp-door-back",
	});
}

export default Component;
