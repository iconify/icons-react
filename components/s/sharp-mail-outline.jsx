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
		"content": `<style>.aqn2vnbqm {
  fill: currentColor;
  d: path("M22 4H2.01L2 20h20zm-2 14H4V8l8 5l8-5zm-8-7L4 6h16z");
}
</style><path class="aqn2vnbqm"/>`,
		"fallback": "ic:sharp-mail-outline",
	});
}

export default Component;
