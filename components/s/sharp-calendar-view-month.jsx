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
		"content": `<style>.cfxib686h {
  fill: currentColor;
  d: path("M22 4H2v16h20zM8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z");
}
</style><path class="cfxib686h"/>`,
		"fallback": "ic:sharp-calendar-view-month",
	});
}

export default Component;
