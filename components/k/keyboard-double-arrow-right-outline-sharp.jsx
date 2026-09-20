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
		"content": `<style>.k9ocmub5o {
  fill: currentColor;
  d: path("M9.575 12L5 7.4L6.4 6l6 6l-6 6L5 16.6zm6.6 0L11.6 7.4L13 6l6 6l-6 6l-1.4-1.4z");
}
</style><path class="k9ocmub5o"/>`,
		"fallback": "material-symbols:keyboard-double-arrow-right-outline-sharp",
	});
}

export default Component;
