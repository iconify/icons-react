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
		"content": `<style>.mq5p0e3-g {
  fill: currentColor;
  d: path("M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2zM4 5h16v10H4z");
}
</style><path class="mq5p0e3-g"/>`,
		"fallback": "ic:sharp-laptop-windows",
	});
}

export default Component;
