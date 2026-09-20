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
		"content": `<style>.wv6jnluww {
  fill: currentColor;
  d: path("M6.5 17.5h11v-1h-11zM4 20V4h16v16z");
}
</style><path class="wv6jnluww"/>`,
		"fallback": "material-symbols-light:toast-sharp",
	});
}

export default Component;
