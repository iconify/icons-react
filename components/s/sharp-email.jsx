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
		"content": `<style>.uzvno1w7h {
  fill: currentColor;
  d: path("M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z");
}
</style><path class="uzvno1w7h"/>`,
		"fallback": "ic:sharp-email",
	});
}

export default Component;
