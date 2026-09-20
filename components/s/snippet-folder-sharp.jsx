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
		"content": `<style>.za1o8i3ss {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm12.5-4.5v-5h1.375l1.625 1.625V15.5zM13 17h6v-5.5L16.5 9H13z");
}
</style><path class="za1o8i3ss"/>`,
		"fallback": "material-symbols:snippet-folder-sharp",
	});
}

export default Component;
