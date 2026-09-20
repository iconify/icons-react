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
		"content": `<style>.xj8_t7fgp {
  fill: currentColor;
  d: path("M4 18v-4.808h6.808V18zm9.192 0v-4.808H20V18zM4 10.808V6h6.808v4.808zm9.192 0V6H20v4.808z");
}
</style><path class="xj8_t7fgp"/>`,
		"fallback": "material-symbols-light:tile-small",
	});
}

export default Component;
