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
		"content": `<style>.rfqgtltdl {
  fill: currentColor;
  d: path("m7 18l-1.4-1.4l4.6-4.6l-4.6-4.6L7 6l6 6zm9 0V6h2v12z");
}
</style><path class="rfqgtltdl"/>`,
		"fallback": "material-symbols:last-page",
	});
}

export default Component;
