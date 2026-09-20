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
		"content": `<style>.ufn9jdg5n {
  fill: currentColor;
  d: path("M9.5 21v-3L6 14.5V7h2V3h2v4h4V3h2v4h2v7.5L14.5 18v3z");
}
</style><path class="ufn9jdg5n"/>`,
		"fallback": "material-symbols:power-sharp",
	});
}

export default Component;
