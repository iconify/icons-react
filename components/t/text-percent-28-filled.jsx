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
		"content": `<style>.pqb09fbdn {
  fill: currentColor;
  d: path("M21.305 3.171a1 1 0 0 1 .27 1.388l-13.49 20a1 1 0 1 1-1.658-1.118l13.49-20a1 1 0 0 1 1.388-.27M7.5 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0m15 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10");
}
</style><path class="pqb09fbdn"/>`,
		"fallback": "fluent:text-percent-28-filled",
	});
}

export default Component;
