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
		"content": `<style>.g5a1bc04e {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 12v158.34L49.66 44H208a4 4 0 0 1 4 4M44 208V49.66L206.34 212H48a4 4 0 0 1-4-4");
}
</style><path class="g5a1bc04e"/>`,
		"fallback": "ph:placeholder-thin",
	});
}

export default Component;
