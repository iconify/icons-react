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
		"content": `<style>.shyhqslln {
  fill: currentColor;
  d: path("M5 20V4h14.02v16zm6.52-6.536L9.4 11.35l-.708.708l3.327 3.327l3.289-3.289l-.708-.713l-2.08 2.08V8.77h-1z");
}
</style><path class="shyhqslln"/>`,
		"fallback": "material-symbols-light:tilt-arrow-down-sharp",
	});
}

export default Component;
