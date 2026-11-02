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
		"content": `<style>.n8tzgjp7z {
  fill: currentColor;
  d: path("M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m1 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0m7 6H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="n8tzgjp7z"/>`,
		"fallback": "coolicons:passport-fill",
	});
}

export default Component;
