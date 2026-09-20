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
		"content": `<style>.wxnhd5b6w {
  fill: currentColor;
  d: path("M6 15h1.5v-4.5h1v3H10v-3h1V15h1.5V9H6zm7.5 0H15v-1.5h3V9h-4.5zm1.5-3v-1.5h1.5V12zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="wxnhd5b6w"/>`,
		"fallback": "material-symbols:mp-outline-sharp",
	});
}

export default Component;
