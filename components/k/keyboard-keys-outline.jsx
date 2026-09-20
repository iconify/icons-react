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
		"content": `<style>.dojo7xbge {
  fill: currentColor;
  d: path("M7 17v-2h10v2zm-4-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zM3 9V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm4 0V7h2v2z");
}
</style><path class="dojo7xbge"/>`,
		"fallback": "material-symbols:keyboard-keys-outline",
	});
}

export default Component;
