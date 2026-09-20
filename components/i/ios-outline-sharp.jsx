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
		"content": `<style>.gi2a7l2pr {
  fill: currentColor;
  d: path("M4 9V7h2v2zm0 8v-6h2v6zm3 0V7h6v10zm2-2h2V9H9zm5 2v-2h4v-2h-4V7h6v2h-4v2h4v6z");
}
</style><path class="gi2a7l2pr"/>`,
		"fallback": "material-symbols:ios-outline-sharp",
	});
}

export default Component;
