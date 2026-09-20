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
		"content": `<style>.dfc0ojdum {
  fill: currentColor;
  d: path("M7.5 19v-1h9v1zm4-3.384V6.883L8.38 9.996l-.688-.688L12 5l4.308 4.308l-.689.688L12.5 6.883v8.733z");
}
</style><path class="dfc0ojdum"/>`,
		"fallback": "material-symbols-light:upgrade-sharp",
	});
}

export default Component;
