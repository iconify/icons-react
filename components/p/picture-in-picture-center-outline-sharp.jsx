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
		"content": `<style>.vpwg4-7pp {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm4.154-3.154h7.692V9.154H8.154z");
}
</style><path class="vpwg4-7pp"/>`,
		"fallback": "material-symbols-light:picture-in-picture-center-outline-sharp",
	});
}

export default Component;
