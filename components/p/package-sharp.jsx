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
		"content": `<style>.iyl502ght {
  fill: currentColor;
  d: path("M7 16.5h5v-1H7zM4 20V4h16v16zM9 5v6.962l3-1.5l3 1.5V5z");
}
</style><path class="iyl502ght"/>`,
		"fallback": "material-symbols-light:package-sharp",
	});
}

export default Component;
