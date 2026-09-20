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
		"content": `<style>.u0hjx3bex {
  fill: currentColor;
  d: path("M17.733 16.248L6.6 5h9.035L21 12zM20.5 23.3L16.2 19H3V5.8L.7 3.5l.708-.708l19.8 19.8z");
}
</style><path class="u0hjx3bex"/>`,
		"fallback": "material-symbols-light:label-off-sharp",
	});
}

export default Component;
