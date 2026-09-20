import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bel7igkbd {
  fill: currentColor;
  d: path("M5.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M10.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="bel7igkbd"/>`,
		"fallback": "fluent:re-order-dots-vertical-16-filled",
	});
}

export default Component;
