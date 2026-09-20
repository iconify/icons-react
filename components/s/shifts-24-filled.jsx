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
		"content": `<style>.zz6-tacia {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-6 3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h4.498a.75.75 0 0 0 0-1.5H12.5V6.75a.75.75 0 0 0-.75-.75");
}
</style><path class="zz6-tacia"/>`,
		"fallback": "fluent:shifts-24-filled",
	});
}

export default Component;
