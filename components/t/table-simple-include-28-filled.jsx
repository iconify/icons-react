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
		"content": `<style>.ditoq75il {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h6.5v9.955a4 4 0 0 0-.295.295H3zM22.25 12A3.74 3.74 0 0 1 25 13.2V6.75A3.75 3.75 0 0 0 21.25 3h-6.5v9.135a3.8 3.8 0 0 1 1-.135zM12 15.75c0-.346.047-.682.135-1H3v6.5A3.75 3.75 0 0 0 6.75 25h6.45a3.74 3.74 0 0 1-1.2-2.75zm1 0A2.75 2.75 0 0 1 15.75 13h6.5A2.75 2.75 0 0 1 25 15.75v6.5A2.75 2.75 0 0 1 22.25 25h-6.5A2.75 2.75 0 0 1 13 22.25z");
}
</style><path class="ditoq75il"/>`,
		"fallback": "fluent:table-simple-include-28-filled",
	});
}

export default Component;
