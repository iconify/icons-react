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
		"content": `<style>.ps0-gn9su {
  fill: currentColor;
  d: path("M215.38 14.54a12 12 0 0 0-10.29-2.18l-128 32A12 12 0 0 0 68 56v103.35A40 40 0 1 0 92 196v-82.63l104-26v40A40 40 0 1 0 220 164V24a12 12 0 0 0-4.62-9.46M52 212a16 16 0 1 1 16-16a16 16 0 0 1-16 16M92 88.63V65.37l104-26v23.26ZM180 180a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><path class="ps0-gn9su"/>`,
		"fallback": "ph:music-notes-bold",
	});
}

export default Component;
