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
		"content": `<style>.vu36vqbxp {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-5H5z");
}
</style><path class="vu36vqbxp"/>`,
		"fallback": "material-symbols:scrollable-header-sharp",
	});
}

export default Component;
