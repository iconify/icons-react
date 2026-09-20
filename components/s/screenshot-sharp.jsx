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
		"content": `<style>.mbug5nb6s {
  fill: currentColor;
  d: path("M16 15h-2v3h-3v2h5zM8 9h2V6h3V4H8zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="mbug5nb6s"/>`,
		"fallback": "material-symbols:screenshot-sharp",
	});
}

export default Component;
