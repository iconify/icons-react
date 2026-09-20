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
		"content": `<style>.xrka0qbfz {
  fill: currentColor;
  d: path("m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z");
}
</style><path class="xrka0qbfz"/>`,
		"fallback": "material-symbols:keyboard-backspace-outline",
	});
}

export default Component;
