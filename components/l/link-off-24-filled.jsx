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
		"content": `<style>.qb9vweb5b {
  fill: currentColor;
  d: path("M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06L15.94 17H15a1 1 0 0 1-.736-1.676L11.94 13H7a1 1 0 0 1-.116-1.993L7 11h2.94l-2-2H7a3 3 0 0 0-.177 5.995L7 15h2a1 1 0 0 1 .116 1.993L9 17H7a5 5 0 0 1-.968-9.907L2.22 3.28a.75.75 0 0 1 0-1.06M17 7a5 5 0 0 1 2.508 9.326l-1.503-1.503a2.998 2.998 0 0 0-.828-5.818L17 9h-2a1 1 0 0 1-.116-1.993L15 7zm0 4a1 1 0 0 1 .116 1.993L17 13h-.818l-2-2z");
}
</style><path class="qb9vweb5b"/>`,
		"fallback": "fluent:link-off-24-filled",
	});
}

export default Component;
