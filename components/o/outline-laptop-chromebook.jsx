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
		"content": `<style>.rwzgto0ix {
  fill: currentColor;
  d: path("M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z");
}
</style><path class="rwzgto0ix"/>`,
		"fallback": "ic:outline-laptop-chromebook",
	});
}

export default Component;
