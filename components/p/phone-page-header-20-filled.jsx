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
		"content": `<style>.k-gvc7bgc {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1H5zm0 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6z");
}
</style><path class="k-gvc7bgc"/>`,
		"fallback": "fluent:phone-page-header-20-filled",
	});
}

export default Component;
