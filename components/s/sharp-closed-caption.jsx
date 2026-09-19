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
		"content": `<style>.nbz_v2bkl {
  fill: currentColor;
  d: path("M21 4H3v16h18zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5z");
}
</style><path class="nbz_v2bkl"/>`,
		"fallback": "ic:sharp-closed-caption",
	});
}

export default Component;
