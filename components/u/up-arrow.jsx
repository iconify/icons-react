import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mbcy0dnue {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m64 22.95l31.13 42.47H75.71v39.63H52.48V65.42H32.86z");
}
</style><path class="mbcy0dnue"/>`,
		"fallback": "noto-v1:up-arrow",
	});
}

export default Component;
