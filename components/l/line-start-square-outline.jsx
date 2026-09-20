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
		"content": `<style>.y0l-fbcox {
  fill: currentColor;
  d: path("M4.577 14.923h5.846V9.077H4.577zm6.846 1H3.577V8.077h7.846V11.5h9.5v1h-9.5zM7.5 12");
}
</style><path class="y0l-fbcox"/>`,
		"fallback": "material-symbols-light:line-start-square-outline",
	});
}

export default Component;
