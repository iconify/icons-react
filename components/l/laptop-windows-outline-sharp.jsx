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
		"content": `<style>.s2b8j16ve {
  fill: currentColor;
  d: path("M0 20v-2h4v-1H2V3h20v14h-2v1h4v2zm4-5h16V5H4zm0 0V5z");
}
</style><path class="s2b8j16ve"/>`,
		"fallback": "material-symbols:laptop-windows-outline-sharp",
	});
}

export default Component;
