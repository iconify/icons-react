import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.diddwx_cp {
  fill: currentColor;
  d: path("M232 216a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h149.25A72 72 0 0 0 144 80.46V136a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v32.37A88.05 88.05 0 0 1 203.94 208H224a8 8 0 0 1 8 8m-96-32a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16Z");
}
</style><path class="diddwx_cp"/>`,
		"fallback": "ph:microscope-fill",
	});
}

export default Component;
