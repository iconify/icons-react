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
		"content": `<style>.x9_qk5bmp {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h3.25v-4.5H7V5H5zm10.75 0H19V5h-2v9.5h-1.25zm-6 0h4.5v-4.5H13V5h-2v9.5H9.75z");
}
</style><path class="x9_qk5bmp"/>`,
		"fallback": "material-symbols:piano-sharp",
	});
}

export default Component;
