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
		"content": `<style>.lwk_b1a8o {
  fill: currentColor;
  d: path("M7 17V7h10v10zm2-2h6V9H9zm-2 6v-2h2v2zM3 5V3h2v2zm4 0V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 0V3h2v2zm0 16v-2h2v2zm4-16V3h2v2zM3 21v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm16 12v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z");
}
</style><path class="lwk_b1a8o"/>`,
		"fallback": "material-symbols:select-all-outline-sharp",
	});
}

export default Component;
