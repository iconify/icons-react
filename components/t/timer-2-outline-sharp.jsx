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
		"content": `<style>.a6uifebpi {
  fill: currentColor;
  d: path("M8.5 18.116v-6.731h6.77v-4.27H8.5v-1.23h8v6.73H9.73v4.27h6.77v1.23z");
}
</style><path class="a6uifebpi"/>`,
		"fallback": "material-symbols-light:timer-2-outline-sharp",
	});
}

export default Component;
