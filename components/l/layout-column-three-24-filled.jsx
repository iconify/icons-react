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
		"content": `<style>.w3hfhpbyb {
  fill: currentColor;
  d: path("M9.5 21h5V3h-5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21H8zm9.75 18H16V3h1.75A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21");
}
</style><path class="w3hfhpbyb"/>`,
		"fallback": "fluent:layout-column-three-24-filled",
	});
}

export default Component;
