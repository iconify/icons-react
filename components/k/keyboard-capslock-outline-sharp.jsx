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
		"content": `<style>.b6xmm6bjb {
  fill: currentColor;
  d: path("M6.5 17.5v-1h11v1zM12 6.292l5.308 5.308l-.708.708l-4.6-4.6l-4.6 4.6l-.708-.708z");
}
</style><path class="b6xmm6bjb"/>`,
		"fallback": "material-symbols-light:keyboard-capslock-outline-sharp",
	});
}

export default Component;
