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
		"content": `<style>.ozcmnm4vv {
  fill: currentColor;
  d: path("M200 26H72a22 22 0 0 0-22 22v168a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V48a10 10 0 0 1 20 0v104a6 6 0 0 0 12 0V48a22 22 0 0 0-22-22M72 38h108.41A21.84 21.84 0 0 0 178 48v138H62V48a10 10 0 0 1 10-10m104 180H64a2 2 0 0 1-2-2v-18h116v18a2 2 0 0 1-2 2");
}
</style><path class="ozcmnm4vv"/>`,
		"fallback": "ph:towel-light",
	});
}

export default Component;
