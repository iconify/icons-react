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
		"content": `<style>.ejgusqb7e {
  fill: currentColor;
  d: path("M13 16.12h-.03c3.49-.4 6.2-3.36 6.2-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6zM7.17 9.17c0-2.76 2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5");
}
</style><path class="ejgusqb7e"/>`,
		"fallback": "ic:outline-nature",
	});
}

export default Component;
