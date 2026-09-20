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
		"content": `<style>.mqwcj0b4q {
  fill: currentColor;
  d: path("M16 17.096v-1h3.33l-6.026-5.938l-4 4L3 7.804l.708-.708l5.596 5.596l4-4L20 15.39v-3.293h1v5z");
}
</style><path class="mqwcj0b4q"/>`,
		"fallback": "material-symbols-light:trending-down-outline-sharp",
	});
}

export default Component;
