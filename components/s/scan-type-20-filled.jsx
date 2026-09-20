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
		"content": `<style>.ghvl49t7y {
  fill: currentColor;
  d: path("M4.5 3.5a1 1 0 0 0-1 1v2.25a.75.75 0 0 1-1.5 0V4.5A2.5 2.5 0 0 1 4.5 2h2.25a.75.75 0 0 1 0 1.5zm0 13a1 1 0 0 1-1-1v-2.25a.75.75 0 0 0-1.5 0v2.25A2.5 2.5 0 0 0 4.5 18h2.25a.75.75 0 0 0 0-1.5zm12-12a1 1 0 0 0-1-1h-2.25a.75.75 0 0 1 0-1.5h2.25A2.5 2.5 0 0 1 18 4.5v2.25a.75.75 0 0 1-1.5 0zm-1 12a1 1 0 0 0 1-1v-2.25a.75.75 0 0 1 1.5 0v2.25a2.5 2.5 0 0 1-2.5 2.5h-2.25a.75.75 0 0 1 0-1.5zM5.75 6.75A.75.75 0 0 1 6.5 6h7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7.5h-2v5H11a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h.25v-5h-2v.25a.75.75 0 0 1-1.5 0z");
}
</style><path class="ghvl49t7y"/>`,
		"fallback": "fluent:scan-type-20-filled",
	});
}

export default Component;
