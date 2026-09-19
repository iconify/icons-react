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
		"content": `<style>.s-x5mhb3w {
  fill: currentColor;
  d: path("M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3L5 6.99h3V14h2V6.99h3z");
}
</style><path class="s-x5mhb3w"/>`,
		"fallback": "ic:sharp-swap-vert",
	});
}

export default Component;
