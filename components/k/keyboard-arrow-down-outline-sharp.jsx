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
		"content": `<style>.xx8hedcya {
  fill: currentColor;
  d: path("m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z");
}
</style><path class="xx8hedcya"/>`,
		"fallback": "material-symbols:keyboard-arrow-down-outline-sharp",
	});
}

export default Component;
