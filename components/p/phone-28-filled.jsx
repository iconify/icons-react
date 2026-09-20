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
		"content": `<style>.mgacj0bhl {
  fill: currentColor;
  d: path("M7 4.75A2.75 2.75 0 0 1 9.75 2h8.5A2.75 2.75 0 0 1 21 4.75v18.5A2.75 2.75 0 0 1 18.25 26h-8.5A2.75 2.75 0 0 1 7 23.25zM12.25 21a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="mgacj0bhl"/>`,
		"fallback": "fluent:phone-28-filled",
	});
}

export default Component;
