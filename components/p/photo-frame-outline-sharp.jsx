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
		"content": `<style>.yclwbzbry {
  fill: currentColor;
  d: path("M4.846 19.423V18H2V5h20v13h-2.846v1.423zM3 17h18V6H3zm3.404-2.5h11.212l-3.5-4.673l-3.116 4l-2.096-2.539zM3 17V6z");
}
</style><path class="yclwbzbry"/>`,
		"fallback": "material-symbols-light:photo-frame-outline-sharp",
	});
}

export default Component;
