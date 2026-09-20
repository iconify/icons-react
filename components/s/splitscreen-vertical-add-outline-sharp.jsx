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
		"content": `<style>.ewg8vebyg {
  fill: currentColor;
  d: path("M19 5h-4.025h.125h-.1zm-6-2h8v12h-2V5h-4v16h-2zM3 21V3h8v18zM9 5H5v14h4zm0 0H5zm10 18v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="ewg8vebyg"/>`,
		"fallback": "material-symbols:splitscreen-vertical-add-outline-sharp",
	});
}

export default Component;
