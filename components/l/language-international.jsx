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
		"content": `<style>.rht-29q0m {
  fill: currentColor;
  d: path("M2.27 15.5v-7h1v7zm2.615 0v-7h1.23l3.13 6.065l-.36.05V8.5h1v7H8.654L5.525 9.435l.36-.05V15.5zm8.423 0v-6h-2v-1h5v1h-2v6zm4.423 0v-7h1v6h3v1z");
}
</style><path class="rht-29q0m"/>`,
		"fallback": "material-symbols-light:language-international",
	});
}

export default Component;
