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
		"content": `<style>.l457yccog {
  fill: currentColor;
  d: path("M236 127A108.44 108.44 0 0 0 54.46 56.69A107.53 107.53 0 0 0 20 127a12 12 0 0 0 12 13h92v60a28 28 0 0 0 56 0a4 4 0 0 0-8 0a20 20 0 0 1-40 0v-60h92a12 12 0 0 0 12-13m-9 3.74a4 4 0 0 1-3 1.3H32a4 4 0 0 1-4-4.38a100.43 100.43 0 0 1 168.1-65a99.53 99.53 0 0 1 31.88 65a4 4 0 0 1-1.05 3.04Z");
}
</style><path class="l457yccog"/>`,
		"fallback": "ph:umbrella-simple-thin",
	});
}

export default Component;
