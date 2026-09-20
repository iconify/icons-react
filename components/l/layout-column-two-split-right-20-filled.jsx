import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.se_wrsbly {
  fill: currentColor;
  d: path("M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3m3-7.5h-6.5V3H14a3 3 0 0 1 3 3zM6 3h3.5v14H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3");
}
</style><path class="se_wrsbly"/>`,
		"fallback": "fluent:layout-column-two-split-right-20-filled",
	});
}

export default Component;
