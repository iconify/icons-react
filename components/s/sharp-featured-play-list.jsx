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
		"content": `<style>.ffns4ybyp {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-11 8H3V9h9zm0-4H3V5h9z");
}
</style><path class="ffns4ybyp"/>`,
		"fallback": "ic:sharp-featured-play-list",
	});
}

export default Component;
