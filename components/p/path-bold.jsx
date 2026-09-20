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
		"content": `<style>.v64dgirii {
  fill: currentColor;
  d: path("M200 164a36.07 36.07 0 0 0-33.94 24H72a28 28 0 0 1 0-56h96a44 44 0 0 0 0-88H72a12 12 0 0 0 0 24h96a20 20 0 0 1 0 40H72a52 52 0 0 0 0 104h94.06A36 36 0 1 0 200 164m0 48a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="v64dgirii"/>`,
		"fallback": "ph:path-bold",
	});
}

export default Component;
