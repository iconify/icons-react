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
		"content": `<style>.ztqyy5bqo {
  fill: currentColor;
  d: path("M9.673 16.337h4.654V12.5H9.673zm0-4.837h4.654V7.727H9.673zM4 11.5h4.673V7.71L4 6.323zm0 6.183l4.673-1.293V12.5H4zm16 0V12.5h-4.673v3.89zM15.327 11.5H20V6.423l-4.673 1.204zM3 19V5l6.096 1.75h5.789L21 5.106V19l-6.116-1.664H9.116z");
}
</style><path class="ztqyy5bqo"/>`,
		"fallback": "material-symbols-light:spatial-gallery-outline",
	});
}

export default Component;
