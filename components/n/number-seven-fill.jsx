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
		"content": `<style>.mm6v8sb2i {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-32.47 50.69l-40 112a8 8 0 1 1-15.06-5.38L148.65 80H96a8 8 0 0 1 0-16h64a8 8 0 0 1 7.53 10.69");
}
</style><path class="mm6v8sb2i"/>`,
		"fallback": "ph:number-seven-fill",
	});
}

export default Component;
