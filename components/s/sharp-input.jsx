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
		"content": `<style>.s7goe2bmb {
  fill: currentColor;
  d: path("M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2M11 16l4-4l-4-4v3H1v2h10zM23 3.01H1V9h2V4.99h18v14.03H3V15H1v5.99h22zM11 16l4-4l-4-4v3H1v2h10z");
}
</style><path class="s7goe2bmb"/>`,
		"fallback": "ic:sharp-input",
	});
}

export default Component;
