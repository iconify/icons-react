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
		"content": `<style>.gwy96wbkk {
  fill: currentColor;
  d: path("M3 17.039V6.961h10.077v10.077zm1-1h8.077V7.96H4zm11.808-7.847v-1.23h1.23v1.23zm0 8.846v-1.23h1.23v1.23zm3.961-8.846v-1.23H21v1.23zm0 4.423v-1.23H21v1.23zm0 4.423v-1.23H21v1.23zM8.04 12");
}
</style><path class="gwy96wbkk"/>`,
		"fallback": "material-symbols-light:move-selection-left-outline",
	});
}

export default Component;
