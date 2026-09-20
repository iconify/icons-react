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
		"content": `<style>.r8ne-k42k {
  fill: currentColor;
  d: path("m10 21l-6-6l6.025-6.025l1.4 1.425l-3.6 3.6H17V4h2v12H7.825l3.6 3.575z");
}
</style><path class="r8ne-k42k"/>`,
		"fallback": "material-symbols:subdirectory-arrow-left-outline",
	});
}

export default Component;
