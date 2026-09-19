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
		"content": `<style>.yf3_r800o {
  fill: currentColor;
  d: path("M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z");
}
</style><path class="yf3_r800o"/>`,
		"fallback": "ic:outline-align-horizontal-left",
	});
}

export default Component;
