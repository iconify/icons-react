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
		"content": `<style>.u7opebcxx {
  fill: currentColor;
  d: path("M5 21V7h3.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7H19v14zM9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zm-1 4h1V8h-1zm6 0h1V8h-1z");
}
</style><path class="u7opebcxx"/>`,
		"fallback": "material-symbols-light:shopping-bag-sharp",
	});
}

export default Component;
