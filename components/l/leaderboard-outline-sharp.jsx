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
		"content": `<style>.svvxdj94z {
  fill: currentColor;
  d: path("M4 19h4v-8H4zm6 0h4V5h-4zm6 0h4v-6h-4zM2 21V9h6V3h8v8h6v10z");
}
</style><path class="svvxdj94z"/>`,
		"fallback": "material-symbols:leaderboard-outline-sharp",
	});
}

export default Component;
