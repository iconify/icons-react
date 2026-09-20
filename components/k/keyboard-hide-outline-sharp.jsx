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
		"content": `<style>.og69u5b1h {
  fill: currentColor;
  d: path("M12 21.846L8.923 18.77h6.154zM3 16V4h18v12zm1-1h16V5H4zm4.23-1.23h7.54v-1.54H8.23zm-3-3h1.54V9.23H5.23zm3 0h1.54V9.23H8.23zm3 0h1.54V9.23h-1.54zm3 0h1.54V9.23h-1.54zm3 0h1.54V9.23h-1.54zm-12-3h1.54V6.23H5.23zm3 0h1.54V6.23H8.23zm3 0h1.54V6.23h-1.54zm3 0h1.54V6.23h-1.54zm3 0h1.54V6.23h-1.54zM4 15V5z");
}
</style><path class="og69u5b1h"/>`,
		"fallback": "material-symbols-light:keyboard-hide-outline-sharp",
	});
}

export default Component;
