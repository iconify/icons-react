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
		"content": `<style>.z2jo7sntp {
  fill: currentColor;
  d: path("m12 17l4-4l-1.4-1.4l-1.6 1.55V9h-2v4.15L9.4 11.6L8 13zm-8 5V8l6-6h10v20zm2-2h12V4h-7.15L6 8.85zm0 0h12z");
}
</style><path class="z2jo7sntp"/>`,
		"fallback": "material-symbols:sim-card-download-outline-sharp",
	});
}

export default Component;
