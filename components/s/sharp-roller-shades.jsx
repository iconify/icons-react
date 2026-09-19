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
		"content": `<style>.og4e6_85k {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM6 19v-6h5v1.8c-.4.3-.8.8-.8 1.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.6-.3-1.1-.8-1.4V13h5v6z");
}
</style><path class="og4e6_85k"/>`,
		"fallback": "ic:sharp-roller-shades",
	});
}

export default Component;
