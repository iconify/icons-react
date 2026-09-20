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
		"content": `<style>.ud3woyhym {
  fill: currentColor;
  d: path("M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="ud3woyhym"/>`,
		"fallback": "ph:number-eight",
	});
}

export default Component;
