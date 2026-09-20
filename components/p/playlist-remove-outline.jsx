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
		"content": `<style>.bt4dvq_na {
  fill: currentColor;
  d: path("M14.4 22L13 20.6l2.6-2.6l-2.6-2.6l1.4-1.4l2.6 2.6l2.6-2.6l1.4 1.4l-2.6 2.6l2.6 2.6l-1.4 1.4l-2.6-2.6zM3 16v-2h7v2zm0-4v-2h11v2zm0-4V6h11v2z");
}
</style><path class="bt4dvq_na"/>`,
		"fallback": "material-symbols:playlist-remove-outline",
	});
}

export default Component;
