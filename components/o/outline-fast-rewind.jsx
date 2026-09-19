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
		"content": `<style>.jmizeqb3b {
  fill: currentColor;
  d: path("M18 9.86v4.28L14.97 12zm-9 0v4.28L5.97 12zM20 6l-8.5 6l8.5 6zm-9 0l-8.5 6l8.5 6z");
}
</style><path class="jmizeqb3b"/>`,
		"fallback": "ic:outline-fast-rewind",
	});
}

export default Component;
