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
		"content": `<style>.tcgi_3evl {
  fill: currentColor;
  d: path("M11 12V6a3 3 0 1 0 0 6m0 2a5 5 0 0 1 0-10h6a1 1 0 0 1 0 2v13a1 1 0 0 1-2 0V6h-2v13a1 1 0 0 1-2 0Z");
}
</style><path class="tcgi_3evl"/>`,
		"fallback": "coolicons:paragraph-fill-sharp",
	});
}

export default Component;
