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
		"content": `<style>.cui74ac_d {
  fill: currentColor;
  d: path("M20 2.01L4 2v20h16zM18 20H6v-9.02h12zm0-11H6V4h12zM8 5h2v3H8zm0 7h2v5H8z");
}
</style><path class="cui74ac_d"/>`,
		"fallback": "ic:sharp-kitchen",
	});
}

export default Component;
