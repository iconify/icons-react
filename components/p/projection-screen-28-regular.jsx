import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vuthq0boe {
  fill: currentColor;
  d: path("M4 3a2 2 0 0 0-1 3.732v9.518a4.25 4.25 0 0 0 4.25 4.25h6v3h-4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-4.5v-3h6A4.25 4.25 0 0 0 25 16.25V6.732A2 2 0 0 0 24 3zm.5 4h19v9.25A2.75 2.75 0 0 1 20.75 19H7.25a2.75 2.75 0 0 1-2.75-2.75z");
}
</style><path class="vuthq0boe"/>`,
		"fallback": "fluent:projection-screen-28-regular",
	});
}

export default Component;
