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
		"content": `<style>.tiry-ghuj {
  fill: currentColor;
  d: path("M8 11V9h8v2zm0 3v-2h8v2zm0 3v-2h8v2zm9-8V7h-2V5h2V3h2v2h2v2h-2v2zM3 21V3h11v2H5v14h14v-9h2v11z");
}
</style><path class="tiry-ghuj"/>`,
		"fallback": "material-symbols:post-add-outline-sharp",
	});
}

export default Component;
