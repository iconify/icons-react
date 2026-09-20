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
		"content": `<style>.c5ilydb-b {
  fill: currentColor;
  d: path("M15 15.348L18.348 12L15 8.652L11.652 12zm0 1.421L10.73 12.5H3.078v-1h7.654L15 7.23L19.77 12zM15 12");
}
</style><path class="c5ilydb-b"/>`,
		"fallback": "material-symbols-light:line-end-diamond-outline",
	});
}

export default Component;
