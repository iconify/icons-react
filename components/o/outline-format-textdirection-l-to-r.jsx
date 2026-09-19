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
		"content": `<style>.ei8w4-tkm {
  fill: currentColor;
  d: path("M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2zm0 12v3H5v2h12v3l4-4z");
}
</style><path class="ei8w4-tkm"/>`,
		"fallback": "ic:outline-format-textdirection-l-to-r",
	});
}

export default Component;
