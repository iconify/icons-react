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
		"content": `<style>.f_ge4sbfb {
  fill: currentColor;
  d: path("m11 18l-6-6l6-6l1.4 1.4L7.825 12l4.575 4.6zm6.6 0l-6-6l6-6L19 7.4L14.425 12L19 16.6z");
}
</style><path class="f_ge4sbfb"/>`,
		"fallback": "material-symbols:keyboard-double-arrow-left-outline",
	});
}

export default Component;
