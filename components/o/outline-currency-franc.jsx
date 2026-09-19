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
		"content": `<style>.jr0advatx {
  fill: currentColor;
  d: path("M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z");
}
</style><path class="jr0advatx"/>`,
		"fallback": "ic:outline-currency-franc",
	});
}

export default Component;
