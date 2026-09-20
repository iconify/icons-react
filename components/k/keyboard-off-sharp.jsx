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
		"content": `<style>.s9g8yp8ww {
  fill: currentColor;
  d: path("M20.62 21.89L2.955 4.228l.713-.713l17.664 17.663zM8.23 15.77h7.695l-1.538-1.54H8.23zm-3-3h1.54v-1.54H5.23zm3 0h1.54v-1.54H8.23zm9 0h1.54v-1.54h-1.54zm-12-3h1.54V8.23H5.23zm9 0h1.54V8.23h-1.54zm3 0h1.54V8.23h-1.54zM3 18V6h3.156l12 12zm18 .025l-5.23-5.261V11.23h-1.56l-1.44-1.466V8.23h-1.552L9.006 6H21z");
}
</style><path class="s9g8yp8ww"/>`,
		"fallback": "material-symbols-light:keyboard-off-sharp",
	});
}

export default Component;
