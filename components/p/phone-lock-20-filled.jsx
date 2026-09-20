import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i-36c8bxx {
  fill: currentColor;
  d: path("M5 3.5A1.5 1.5 0 0 1 6.5 2h7A1.5 1.5 0 0 1 15 3.5v5.541A3 3 0 0 0 11.5 12v.063A2 2 0 0 0 10 14H8.5a.5.5 0 0 0 0 1H10v3H6.5A1.5 1.5 0 0 1 5 16.5zm7.5 8.5v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="i-36c8bxx"/>`,
		"fallback": "fluent:phone-lock-20-filled",
	});
}

export default Component;
