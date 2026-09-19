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
		"content": `<style>.wtidhiwom {
  fill: currentColor;
  d: path("M15 9.86L18.03 12L15 14.14zm-9 0L9.03 12L6 14.14zM13 6v12l8.5-6zM4 6v12l8.5-6z");
}
</style><path class="wtidhiwom"/>`,
		"fallback": "ic:outline-fast-forward",
	});
}

export default Component;
