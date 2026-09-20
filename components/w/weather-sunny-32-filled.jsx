import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e-92njsrn {
  fill: currentColor;
  d: path("M16 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m7 14a7 7 0 1 1-14 0a7 7 0 0 1 14 0m6 1a1 1 0 0 0 0-2h-2a1 1 0 1 0 0 2zm-13 9a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M5 17a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm.294-11.706a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414m1.414 21.414a1 1 0 0 1-1.414-1.414l2-2a1 1 0 1 1 1.414 1.414zm20-21.414a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414m-1.414 21.414a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 1 0-1.414 1.414z");
}
</style><path class="e-92njsrn"/>`,
		"fallback": "fluent:weather-sunny-32-filled",
	});
}

export default Component;
