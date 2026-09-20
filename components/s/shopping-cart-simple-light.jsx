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
		"content": `<style>.dm5rl9b8h {
  fill: currentColor;
  d: path("M236.78 68.37A6 6 0 0 0 232 66H55.67l-9.89-35.61A6 6 0 0 0 40 26H16a6 6 0 0 0 0 12h19.44L71 165.89A22.08 22.08 0 0 0 92.16 182H191a22.08 22.08 0 0 0 21.2-16.11l25.63-92.28a6 6 0 0 0-1.05-5.24m-36.2 94.31A10 10 0 0 1 191 170H92.16a10 10 0 0 1-9.63-7.32L59 78h165.11ZM102 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14m104 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14");
}
</style><path class="dm5rl9b8h"/>`,
		"fallback": "ph:shopping-cart-simple-light",
	});
}

export default Component;
