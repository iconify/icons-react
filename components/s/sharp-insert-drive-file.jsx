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
		"content": `<style>.ynpw5e4mx {
  fill: currentColor;
  d: path("M4.01 2L4 22h16V8l-6-6zM13 9V3.5L18.5 9z");
}
</style><path class="ynpw5e4mx"/>`,
		"fallback": "ic:sharp-insert-drive-file",
	});
}

export default Component;
