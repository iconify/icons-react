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
		"content": `<style>.hlgb3ob_q {
  fill: currentColor;
  d: path("M13 14a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm-.99 3a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><path class="hlgb3ob_q"/>`,
		"fallback": "coolicons:warning-fill",
	});
}

export default Component;
