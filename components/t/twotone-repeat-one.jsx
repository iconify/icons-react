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
		"content": `<style>.s8shq4bfo {
  fill: currentColor;
  d: path("M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4l4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z");
}
</style><path class="s8shq4bfo"/>`,
		"fallback": "ic:twotone-repeat-one",
	});
}

export default Component;
