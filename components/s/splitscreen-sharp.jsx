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
		"content": `<style>.uioqj7bms {
  fill: currentColor;
  d: path("M4 10.635V4h16v6.635zM4 20v-6.615h16V20z");
}
</style><path class="uioqj7bms"/>`,
		"fallback": "material-symbols-light:splitscreen-sharp",
	});
}

export default Component;
