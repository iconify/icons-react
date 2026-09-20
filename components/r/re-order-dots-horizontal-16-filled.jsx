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
		"content": `<style>.cvhg2fe3c {
  fill: currentColor;
  d: path("M11 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M3.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 12a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-6-1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0");
}
</style><path class="cvhg2fe3c"/>`,
		"fallback": "fluent:re-order-dots-horizontal-16-filled",
	});
}

export default Component;
