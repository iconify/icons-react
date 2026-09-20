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
		"content": `<style>.h8c82bb6t {
  fill: currentColor;
  d: path("M211.69 19.27a6 6 0 0 0-5.15-1.09l-128 32A6 6 0 0 0 74 56v114.11A34 34 0 1 0 86 196V60.68l116-29v106.43A34 34 0 1 0 214 164V24a6 6 0 0 0-2.31-4.73M52 218a22 22 0 1 1 22-22a22 22 0 0 1-22 22m128-32a22 22 0 1 1 22-22a22 22 0 0 1-22 22");
}
</style><path class="h8c82bb6t"/>`,
		"fallback": "ph:music-notes-simple-light",
	});
}

export default Component;
