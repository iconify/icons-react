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
		"content": `<style>.zi3llcbne {
  fill: currentColor;
  d: path("M8.25 15.75h3v-3h-3zm0-4.5h3v-3h-3zm4.5 4.5h3v-3h-3zm0-4.5h3v-3h-3zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="zi3llcbne"/>`,
		"fallback": "material-symbols-light:view-compact-alt-outline-sharp",
	});
}

export default Component;
