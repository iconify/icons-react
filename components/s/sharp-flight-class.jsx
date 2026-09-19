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
		"content": `<style>.icrmcws_t {
  fill: currentColor;
  d: path("M18 4h-6v9h6zM9.5 16H18v2H8L5 8V4h2v4zM8 19h10v2H8z");
}
</style><path class="icrmcws_t"/>`,
		"fallback": "ic:sharp-flight-class",
	});
}

export default Component;
