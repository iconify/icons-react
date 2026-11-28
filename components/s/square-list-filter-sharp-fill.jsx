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
		"content": `<style>.ivfar3_lb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2H21C21.552 2 22 2.448 22 3V21C22 21.552 21.552 22 21 22H3C2.448 22 2 21.552 2 21V3C2 2.448 2.448 2 3 2ZM10 17H14V15H10V17ZM8.5 13H15.5V11H8.5V13ZM7 9H17V7H7V9Z");
}
</style><path clip-rule="evenodd" class="ivfar3_lb"/>`,
		"fallback": "keyline-icons:square-list-filter-sharp-fill",
	});
}

export default Component;
