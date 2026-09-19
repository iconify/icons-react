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
		"content": `<style>.yxkfhs9ju {
  fill: currentColor;
  d: path("M15 11H9V7H7v10h2v-4h6v4h2V7h-2z");
}
</style><path class="yxkfhs9ju"/>`,
		"fallback": "ic:twotone-h-mobiledata",
	});
}

export default Component;
