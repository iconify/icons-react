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
		"content": `<style>.d2wfuf_9d {
  fill: currentColor;
  d: path("M10.5 17.5v-1h5v1zm-4.45-.192L1.08 12.34l.714-.715l4.256 4.256l9.155-9.156l.714.714zM14.5 13.5v-1h5v1zm4-4v-1h5v1z");
}
</style><path class="d2wfuf_9d"/>`,
		"fallback": "material-symbols-light:sweep-sharp",
	});
}

export default Component;
