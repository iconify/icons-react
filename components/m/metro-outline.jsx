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
		"content": `<style>.ftukapb8x {
  fill: currentColor;
  d: path("M3 21V3h4.05L12 16.05L16.9 3H21v18h-3V8.75L13.275 21h-2.55L6 8.825V21z");
}
</style><path class="ftukapb8x"/>`,
		"fallback": "material-symbols:metro-outline",
	});
}

export default Component;
