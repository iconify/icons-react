import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rt7g43kec {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h5.5V4zm3.5 6.5H4V14a2 2 0 0 0 2 2h3.5zM14 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.5v12z");
}
</style><path class="rt7g43kec"/>`,
		"fallback": "fluent:layout-column-two-split-left-20-regular",
	});
}

export default Component;
