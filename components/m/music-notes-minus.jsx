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
		"content": `<style>.r3c4z4w5j {
  fill: currentColor;
  d: path("M232 48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-16 40v76a36 36 0 1 1-16-29.92V88a8 8 0 0 1 16 0m-16 76a20 20 0 1 0-20 20a20 20 0 0 0 20-20M88 110.25V196a36 36 0 1 1-16-29.92V56a8 8 0 0 1 6.06-7.76l56-14a8 8 0 0 1 3.88 15.52L88 62.25v31.5l70.06-17.51a8 8 0 0 1 3.88 15.52ZM72 196a20 20 0 1 0-20 20a20 20 0 0 0 20-20");
}
</style><path class="r3c4z4w5j"/>`,
		"fallback": "ph:music-notes-minus",
	});
}

export default Component;
