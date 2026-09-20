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
		"content": `<style>.qwmkc2zcp {
  fill: currentColor;
  d: path("M7.4 17.708L6.692 17L12 11.692L17.308 17l-.708.708l-4.6-4.594zm0-6L6.692 11L12 5.692L17.308 11l-.708.708L12 7.114z");
}
</style><path class="qwmkc2zcp"/>`,
		"fallback": "material-symbols-light:stat-2-outline",
	});
}

export default Component;
