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
		"content": `<style>.ja4gb94dg {
  fill: currentColor;
  d: path("M11 21h2V6.83l1.59 1.59L16 7l-4-4l-4 4l1.41 1.41L11 6.83V9c0 4.27-4.03 7.13-6 8.27l1.46 1.46C8.37 17.56 9.9 16.19 11 14.7z");
}
</style><path class="ja4gb94dg"/>`,
		"fallback": "ic:outline-ramp-right",
	});
}

export default Component;
