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
		"content": `<style>.a369lz0zn {
  fill: currentColor;
  d: path("M13.32 2.603a1.75 1.75 0 0 0-2.643 0l-8.245 9.504c-.983 1.133-.179 2.897 1.321 2.897H7v2.247c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 17 17.25v-2.247h3.245c1.5 0 2.305-1.764 1.322-2.897zM7.75 20.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="a369lz0zn"/>`,
		"fallback": "fluent:keyboard-shift-uppercase-24-filled",
	});
}

export default Component;
