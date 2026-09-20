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
		"content": `<style>.no2n9kc0p {
  fill: currentColor;
  d: path("M216 44h-48a4 4 0 0 0 0 8h20v140.43L107.5 46.07A4 4 0 0 0 104 44H40a4 4 0 0 0 0 8h20v152H40a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8H68V63.57l80.5 146.36A4 4 0 0 0 152 212h40a4 4 0 0 0 4-4V52h20a4 4 0 0 0 0-8M70.77 52h30.86l83.6 152h-30.86Z");
}
</style><path class="no2n9kc0p"/>`,
		"fallback": "ph:notion-logo-thin",
	});
}

export default Component;
