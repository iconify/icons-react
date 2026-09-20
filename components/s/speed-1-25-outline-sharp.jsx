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
		"content": `<style>.csvfl5zrs {
  fill: currentColor;
  d: path("M6.5 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-7 0v-6h4V9h-4V7h6v6h-4v2h4v2zm-6 0V9h-2V7h4v10z");
}
</style><path class="csvfl5zrs"/>`,
		"fallback": "material-symbols:speed-1-25-outline-sharp",
	});
}

export default Component;
