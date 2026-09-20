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
		"content": `<style>.y-ji1bbzy {
  fill: currentColor;
  d: path("m16 15l3-3l-1.05-1.075l-1.2 1.2V9h-1.5v3.125l-1.2-1.2L13 12zM2 20V4h20v16zm2-2h16V6H4zm0 0V6zm1.5-3H7v-4.5h1v3h1.5v-3h1V15H12V9H5.5z");
}
</style><path class="y-ji1bbzy"/>`,
		"fallback": "material-symbols:markdown-outline-sharp",
	});
}

export default Component;
