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
		"content": `<style>.u7qmahlbg {
  fill: currentColor;
  d: path("M2 20v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V4h4v2H4v2zm4 12v-2h2v2zM8 6V4h2v2zm2 14v-2h2v2zm2-10V4h10v6zm2 10v-2h2v2zm4 0v-2h2v-2h2v4zm2-6v-2h2v2z");
}
</style><path class="u7qmahlbg"/>`,
		"fallback": "material-symbols:tab-unselected-sharp",
	});
}

export default Component;
