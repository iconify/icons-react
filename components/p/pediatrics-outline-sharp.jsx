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
		"content": `<style>.w06jotb0v {
  fill: currentColor;
  d: path("M7.885 7.577v-1H11.5V3.769h1v2.808h3.616v1zm.115 13V11q0-1.01.707-1.716t1.716-.707h3.154q1.01 0 1.716.707T16 11v9.577zm1-1h6V11q0-.605-.41-1.014q-.408-.409-1.013-.409h-3.154q-.605 0-1.014.409Q9 10.396 9 11v1.25h2.5v1H9v2.654h2.5v1H9zm0 0v-10z");
}
</style><path class="w06jotb0v"/>`,
		"fallback": "material-symbols-light:pediatrics-outline-sharp",
	});
}

export default Component;
