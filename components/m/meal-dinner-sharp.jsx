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
		"content": `<style>.jonb1pbal {
  fill: currentColor;
  d: path("M8.242 13.423q-2.192 0-3.717-1.531T3 8.173q0-2 1.333-3.48T7.652 3h.112q-.32.529-.495 1.122t-.175 1.224q0 1.963 1.38 3.338t3.351 1.374q.367 0 .717-.061q.35-.06.67-.181q-.523 1.622-1.881 2.615t-3.089.992m9.008-1.961h2.789V7.73H17.25zM2 21v-1h2.039l-.962-3.77h10.25L12.366 20h5.788v-3.81q-.823-.17-1.364-.83q-.54-.66-.54-1.494V6.73h4.789v7.135q0 .834-.531 1.494t-1.354.83V20H22v1z");
}
</style><path class="jonb1pbal"/>`,
		"fallback": "material-symbols-light:meal-dinner-sharp",
	});
}

export default Component;
