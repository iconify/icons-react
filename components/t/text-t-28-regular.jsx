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
		"content": `<style>.n4gg8qhbt {
  fill: currentColor;
  d: path("M5 4.75A.75.75 0 0 1 5.75 4h16.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V5.5h-6.75v17h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5v-17H6.5v2.75a.75.75 0 0 1-1.5 0z");
}
</style><path class="n4gg8qhbt"/>`,
		"fallback": "fluent:text-t-28-regular",
	});
}

export default Component;
