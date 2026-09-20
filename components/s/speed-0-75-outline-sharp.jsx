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
		"content": `<style>.vikvaq5nj {
  fill: currentColor;
  d: path("M5 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-5 0l2-8H7V7h6v1.8L11 17z");
}
</style><path class="vikvaq5nj"/>`,
		"fallback": "material-symbols:speed-0-75-outline-sharp",
	});
}

export default Component;
