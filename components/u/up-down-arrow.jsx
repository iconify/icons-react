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
		"content": `<style>.bj_pawvjy {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M76.09 44.31h20.06L64 .46L31.85 44.31H51.9V83.7H31.85L64 127.54L96.15 83.7H76.09z");
}
</style><path class="bj_pawvjy"/>`,
		"fallback": "noto-v1:up-down-arrow",
	});
}

export default Component;
