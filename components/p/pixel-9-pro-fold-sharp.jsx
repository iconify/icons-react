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
		"content": `<style>.vxwcvub0d {
  fill: currentColor;
  d: path("M3 20V4h18v16zm9-1h8V5h-8zm-2-7.5v-1H5v1zm6-3.73q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m-6-.27v-1H5v1z");
}
</style><path class="vxwcvub0d"/>`,
		"fallback": "material-symbols-light:pixel-9-pro-fold-sharp",
	});
}

export default Component;
