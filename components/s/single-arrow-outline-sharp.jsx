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
		"content": `<style>.m1yj47bwu {
  fill: currentColor;
  d: path("m9.698 18.5l4.654-6.5l-4.654-6.5h1.22L15.57 12l-4.654 6.5z");
}
</style><path class="m1yj47bwu"/>`,
		"fallback": "material-symbols-light:single-arrow-outline-sharp",
	});
}

export default Component;
