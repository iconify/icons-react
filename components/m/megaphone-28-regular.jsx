import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mb-70ccap {
  fill: currentColor;
  d: path("M26 7.353a2.75 2.75 0 0 0-3.458-2.657L4.045 9.629a2.75 2.75 0 0 0-2.041 2.657v3.427a2.75 2.75 0 0 0 2.041 2.657L7 19.158v.342a4.5 4.5 0 0 0 8.56 1.942l6.982 1.862A2.75 2.75 0 0 0 26 20.647zm-3.072-1.208A1.25 1.25 0 0 1 24.5 7.353v13.294a1.25 1.25 0 0 1-1.572 1.207L4.432 16.921a1.25 1.25 0 0 1-.928-1.208v-3.427c0-.566.38-1.062.928-1.207zm-8.856 14.9A3 3 0 0 1 8.5 19.559z");
}
</style><path class="mb-70ccap"/>`,
		"fallback": "fluent:megaphone-28-regular",
	});
}

export default Component;
