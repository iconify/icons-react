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
		"content": `<style>.w-bxbdctz {
  fill: currentColor;
  d: path("M5.5 10.5h3v-3h-3zM3 19V5h18v14z");
}
</style><path class="w-bxbdctz"/>`,
		"fallback": "material-symbols-light:magnification-small-sharp",
	});
}

export default Component;
