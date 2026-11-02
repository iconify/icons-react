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
		"content": `<style>.h5gmqgb7z {
  fill: currentColor;
  d: path("M11 3c1.039 0 1.992.578 2.707 1.293l6 6a2.414 2.414 0 0 1 0 3.414l-6 6a2.414 2.414 0 0 1-3.414 0l-6-6C3.578 12.992 3 12.039 3 11V6a3 3 0 0 1 3-3ZM7.158 8.221a2 2 0 1 0 3.684 1.558A2 2 0 0 0 7.158 8.22");
}
</style><path class="h5gmqgb7z"/>`,
		"fallback": "coolicons:tag-fill",
	});
}

export default Component;
