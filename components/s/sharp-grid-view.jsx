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
		"content": `<style>.fes7web_r {
  fill: currentColor;
  d: path("M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z");
}
</style><path class="fes7web_r"/>`,
		"fallback": "ic:sharp-grid-view",
	});
}

export default Component;
