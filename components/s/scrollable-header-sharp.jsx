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
		"content": `<style>.fi6d5ja8h {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-5.384H5z");
}
</style><path class="fi6d5ja8h"/>`,
		"fallback": "material-symbols-light:scrollable-header-sharp",
	});
}

export default Component;
