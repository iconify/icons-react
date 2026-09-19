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
		"content": `<style>.iphjk5bgf {
  fill: currentColor;
  d: path("M22 2H6v16h16zm-10.5 9H9v2H7.5V7h4zm5 .5c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v16h16v-2H4zm10 5.5h1v-3h-1z");
}
</style><path class="iphjk5bgf"/>`,
		"fallback": "ic:sharp-picture-as-pdf",
	});
}

export default Component;
