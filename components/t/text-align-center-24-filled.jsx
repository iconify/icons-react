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
		"content": `<style>.ozhad2bmy {
  fill: currentColor;
  d: path("M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m2 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m-3-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="ozhad2bmy"/>`,
		"fallback": "fluent:text-align-center-24-filled",
	});
}

export default Component;
