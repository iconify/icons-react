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
		"content": `<style>.kg919l37q {
  fill: currentColor;
  d: path("M3 21V9h18v12zm5.23-2.23h7.54v-1.54H8.23zm-3-3h1.54v-1.54H5.23zm3 0h1.54v-1.54H8.23zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm-12-3h1.54v-1.54H5.23zm3 0h1.54v-1.54H8.23zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm-10.73-6v-4h1v2.12q.762-.975 1.902-1.548t2.483-.573q1.892 0 3.384 1.115q1.493 1.114 1.997 2.885h-1.05q-.485-1.344-1.673-2.172q-1.187-.828-2.658-.828q-1.173 0-2.175.542q-1.002.541-1.604 1.458H10.5v1z");
}
</style><path class="kg919l37q"/>`,
		"fallback": "material-symbols-light:keyboard-previous-language-sharp",
	});
}

export default Component;
