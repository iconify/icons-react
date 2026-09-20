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
		"content": `<style>.ft7496cia {
  fill: currentColor;
  d: path("M4 10.616v-6h16v6zm0 8.769v-6h16v6zm1-1h14v-4H5z");
}
</style><path class="ft7496cia"/>`,
		"fallback": "material-symbols-light:splitscreen-top-sharp",
	});
}

export default Component;
