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
		"content": `<style>.xxib8db2j {
  fill: currentColor;
  d: path("M4 10.635V4h16v6.635zm1-1h14V5H5zM4 20v-6.615h16V20zm1-1h14v-4.615H5zm0-9.365V5zM5 19v-4.615z");
}
</style><path class="xxib8db2j"/>`,
		"fallback": "material-symbols-light:splitscreen-outline-sharp",
	});
}

export default Component;
