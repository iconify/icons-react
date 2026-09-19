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
		"content": `<style>.n9nlzxm0z {
  fill: currentColor;
  d: path("M5 10h4v6h6v-6h4l-7-7zm0 8v2h14v-2z");
}
</style><path class="n9nlzxm0z"/>`,
		"fallback": "ic:sharp-file-upload",
	});
}

export default Component;
