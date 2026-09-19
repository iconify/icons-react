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
		"content": `<style>.k5-8cdcye {
  fill: currentColor;
  d: path("M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18zm-2 16H5V5h14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z");
}
</style><path class="k5-8cdcye"/>`,
		"fallback": "ic:twotone-border-outer",
	});
}

export default Component;
