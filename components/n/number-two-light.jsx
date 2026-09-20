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
		"content": `<style>.s5um_mbok {
  fill: currentColor;
  d: path("M174 208a6 6 0 0 1-6 6H88a6 6 0 0 1-4.8-9.6l72-95.92a34 34 0 0 0-31.88-54.14a34.1 34.1 0 0 0-26.49 20.07a6 6 0 0 1-11-4.81a46.5 46.5 0 0 1 5.43-9.28a46 46 0 0 1 73.48 55.37L100 202h68a6 6 0 0 1 6 6");
}
</style><path class="s5um_mbok"/>`,
		"fallback": "ph:number-two-light",
	});
}

export default Component;
