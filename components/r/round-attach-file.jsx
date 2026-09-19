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
		"content": `<style>.jf7s9kbxf {
  fill: currentColor;
  d: path("M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15A3.993 3.993 0 0 1 8.5 17.5V5.14c0-1.31.94-2.5 2.24-2.63A2.5 2.5 0 0 1 13.5 5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63A2.5 2.5 0 0 0 15 15.5V5.17c0-2.09-1.53-3.95-3.61-4.15A4 4 0 0 0 7 5v12.27c0 2.87 2.1 5.44 4.96 5.71c3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75");
}
</style><path class="jf7s9kbxf"/>`,
		"fallback": "ic:round-attach-file",
	});
}

export default Component;
