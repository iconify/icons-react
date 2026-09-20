import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m1-xjnywy {
  fill: currentColor;
  d: path("M10 5.065A5 5 0 0 1 5.065 10zm-.282-1.726A5 5 0 0 0 9 1.999l-7 7c.403.304.854.548 1.34.719zM.996 7.995A5 5 0 0 1 .283 6.66L6.662.283a5 5 0 0 1 1.333.713zM4.936 0A5 5 0 0 0 0 4.935z");
}
</style><path class="m1-xjnywy"/>`,
		"fallback": "fluent:presence-tentative-10-regular",
	});
}

export default Component;
