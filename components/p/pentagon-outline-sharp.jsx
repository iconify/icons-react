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
		"content": `<style>.d7qfy844x {
  fill: currentColor;
  d: path("M7.085 19.5h9.83l3.306-9.917L12 3.835L3.779 9.583zm-.72 1L2.597 9.192L12 2.616l9.404 6.576l-3.77 11.308zM12 11.667");
}
</style><path class="d7qfy844x"/>`,
		"fallback": "material-symbols-light:pentagon-outline-sharp",
	});
}

export default Component;
