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
		"content": `<style>.p4qfs0b5c {
  fill: currentColor;
  d: path("M5 14V9h1v4h12V9h1v5z");
}
</style><path class="p4qfs0b5c"/>`,
		"fallback": "material-symbols-light:space-bar-sharp",
	});
}

export default Component;
