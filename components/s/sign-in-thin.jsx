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
		"content": `<style>.uyk2s0b6f {
  fill: currentColor;
  d: path("m138.83 130.83l-40 40a4 4 0 0 1-5.66-5.66L126.34 132H24a4 4 0 0 1 0-8h102.34L93.17 90.83a4 4 0 0 1 5.66-5.66l40 40a4 4 0 0 1 0 5.66M200 36h-64a4 4 0 0 0 0 8h60v168h-60a4 4 0 0 0 0 8h64a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4");
}
</style><path class="uyk2s0b6f"/>`,
		"fallback": "ph:sign-in-thin",
	});
}

export default Component;
