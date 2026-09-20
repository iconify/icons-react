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
		"content": `<style>.b0p11ofow {
  fill: currentColor;
  d: path("M203.61 201.71A4 4 0 0 1 200 204a3.85 3.85 0 0 1-1.71-.39l-152-72a4 4 0 0 1 0-7.23l152-72a4 4 0 0 1 3.42 7.23L57.34 128l144.37 68.38a4 4 0 0 1 1.9 5.33");
}
</style><path class="b0p11ofow"/>`,
		"fallback": "ph:less-than-thin",
	});
}

export default Component;
