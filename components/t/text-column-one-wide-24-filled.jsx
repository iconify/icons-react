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
		"content": `<style>.su7aqgb5f {
  fill: currentColor;
  d: path("M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z");
}
</style><path class="su7aqgb5f"/>`,
		"fallback": "fluent:text-column-one-wide-24-filled",
	});
}

export default Component;
