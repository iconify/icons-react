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
		"content": `<style>.p3e4v489a {
  fill: currentColor;
  d: path("M13.577 15.5H18v-7h-4.423zM5 16.5v-9h5.577v1H6v7h4.577v1zm7.577 0v-9H19v9z");
}
</style><path class="p3e4v489a"/>`,
		"fallback": "material-symbols-light:language-us-colemak-outline-sharp",
	});
}

export default Component;
