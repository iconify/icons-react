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
		"content": `<style>.p14l1v4or {
  fill: currentColor;
  d: path("M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zM12 7v10H2V7zm-1.5 8l-2.25-3l-1.75 2.26l-1.25-1.51L3.5 15z");
}
</style><path class="p14l1v4or"/>`,
		"fallback": "ic:sharp-art-track",
	});
}

export default Component;
