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
		"content": `<style>.scm0spdit {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-64a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 166A20 20 0 1 0 124 132a8 8 0 0 1-6.55-12.59L136.63 92H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 152");
}
</style><path class="scm0spdit"/>`,
		"fallback": "ph:number-circle-three",
	});
}

export default Component;
