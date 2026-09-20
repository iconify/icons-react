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
		"content": `<style>.q5bm8xbyu {
  fill: currentColor;
  d: path("M6.7 6.95L5.625 5.875l-1 1l-1.4-1.425l3.4-3.4l1.45 1.425l-1.05 1L8.1 5.55l3.525-3.525L13.05 3.45l-1.4 1.375l1.55 1.55l-3.5 3.5l1.4 1.425l3.5-3.525l1.525 1.5L12.6 12.8l1.375 1.4l3.525-3.525l2.925 2.925l-2.1 2.15l4.725 4.7H20.2l-3.3-3.3l-2.1 2.15L6 10.5l-1.375 1.35l-1.4-1.4z");
}
</style><path class="q5bm8xbyu"/>`,
		"fallback": "material-symbols:syringe-sharp",
	});
}

export default Component;
