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
		"content": `<style>.tbq63-voi {
  fill: currentColor;
  d: path("M4.846 19.423V18H2V5h20v13h-2.846v1.423zM6.404 14.5h11.212l-3.5-4.673l-3.116 4l-2.096-2.539z");
}
</style><path class="tbq63-voi"/>`,
		"fallback": "material-symbols-light:photo-frame-sharp",
	});
}

export default Component;
