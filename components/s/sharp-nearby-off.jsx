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
		"content": `<style>.bqizer38g {
  fill: currentColor;
  d: path("M22.82 12.01L18.83 16l-1.81-1.81L19.2 12L12 4.8L9.81 6.99L8 5.17l3.99-3.99zm-1.63 9.18l-1.41 1.41L16 18.83l-3.99 3.99L1.18 11.99L5.17 8L1.39 4.22L2.8 2.81zm-7-4.17l-1.39-1.39l-.8.8L7.58 12l.8-.8l-1.4-1.39L4.8 12l7.2 7.2zM16.42 12L12 7.58l-.8.8l4.42 4.42z");
}
</style><path class="bqizer38g"/>`,
		"fallback": "ic:sharp-nearby-off",
	});
}

export default Component;
