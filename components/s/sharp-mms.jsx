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
		"content": `<style>.s6wy1zbls {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zM5 14l3.5-4.5l2.5 3.01L14.5 8l4.5 6z");
}
</style><path class="s6wy1zbls"/>`,
		"fallback": "ic:sharp-mms",
	});
}

export default Component;
