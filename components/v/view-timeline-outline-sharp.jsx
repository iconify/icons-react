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
		"content": `<style>.c8ve4cbty {
  fill: currentColor;
  d: path("M6 17h6v-2H6zm6-8h6V7h-6zm-3 4h6v-2H9zm-6 8V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="c8ve4cbty"/>`,
		"fallback": "material-symbols:view-timeline-outline-sharp",
	});
}

export default Component;
