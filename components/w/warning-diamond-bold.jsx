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
		"content": `<style>.qg3d8lsrt {
  fill: currentColor;
  d: path("M128 68a12 12 0 0 1 12 12v52a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12m0 88a16 16 0 1 0 16 16a16 16 0 0 0-16-16m116-28a19.86 19.86 0 0 1-5.84 14.11l-96 96.06a20 20 0 0 1-28.21 0l-96-96.06a20 20 0 0 1 0-28.22L114 17.83a20 20 0 0 1 28.21 0l96.06 96.06A19.86 19.86 0 0 1 244 128m-25.68 0L128 37.67L37.68 128L128 218.33Z");
}
</style><path class="qg3d8lsrt"/>`,
		"fallback": "ph:warning-diamond-bold",
	});
}

export default Component;
