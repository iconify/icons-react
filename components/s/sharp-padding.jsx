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
		"content": `<style>.jmf0-0hbz {
  fill: currentColor;
  d: path("M3 3v18h18V3zm6 6H7V7h2zm4 0h-2V7h2zm4 0h-2V7h2z");
}
</style><path class="jmf0-0hbz"/>`,
		"fallback": "ic:sharp-padding",
	});
}

export default Component;
