import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kycoxqyek {
  fill: currentColor;
  d: path("M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8zM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5");
}
</style><path class="kycoxqyek"/>`,
		"fallback": "fluent:person-16-filled",
	});
}

export default Component;
