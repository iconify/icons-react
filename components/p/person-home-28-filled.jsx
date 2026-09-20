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
		"content": `<style>.fafvh1b7b {
  fill: currentColor;
  d: path("M19.2 14.48a2 2 0 0 1 2.6 0l4.5 3.856a2 2 0 0 1 .7 1.519v5.647a1.5 1.5 0 0 1-1.5 1.5H24a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-5.647a2 2 0 0 1 .7-1.52zm-5.152 3.096A3 3 0 0 0 13 19.855V25.5q.001.243.046.474C7.754 25.708 4 23.225 4 19.715V19a3 3 0 0 1 3-3h8.888zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12");
}
</style><path class="fafvh1b7b"/>`,
		"fallback": "fluent:person-home-28-filled",
	});
}

export default Component;
