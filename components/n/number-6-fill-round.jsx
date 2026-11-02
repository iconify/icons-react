import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zs3w-gm0u {
  fill: currentColor;
  d: path("M9 7v5.999A5 5 0 1 1 7 17V7a5 5 0 0 1 10 0a1 1 0 0 1-2 0a3 3 0 1 0-6 0m0 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="zs3w-gm0u"/>`,
		"fallback": "coolicons:number-6-fill-round",
	});
}

export default Component;
