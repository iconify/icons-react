import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u5nw81b6s {
  fill: currentColor;
  d: path("M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3.171A3 3 0 0 1 22 11v6a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1H6v1a1 1 0 0 1-2 0v-1H3a1 1 0 0 1-1-1v-6c0-1.27.803-2.405 2-2.829Zm4 6v1h3V6H6v2.171A3 3 0 0 1 8 11m5 1h3v-1c0-1.27.803-2.405 2-2.829V6h-5Z");
}
</style><path class="u5nw81b6s"/>`,
		"fallback": "coolicons:sofa-fill-sharp",
	});
}

export default Component;
