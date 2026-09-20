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
		"content": `<style>.wi46_txum {
  fill: currentColor;
  d: path("M19 14h-5v5zM3 21V3h18v12l-6 6zm4-7h5v-2H7zm0-4h10V8H7z");
}
</style><path class="wi46_txum"/>`,
		"fallback": "material-symbols:sticky-note-2-sharp",
	});
}

export default Component;
