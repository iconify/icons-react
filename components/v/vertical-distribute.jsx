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
		"content": `<style>.glfby3bkz {
  fill: currentColor;
  d: path("M3 21v-1.23h18V21zm4.5-8v-2h9v2zM3 4.23V3h18v1.23z");
}
</style><path class="glfby3bkz"/>`,
		"fallback": "material-symbols-light:vertical-distribute",
	});
}

export default Component;
