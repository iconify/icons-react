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
		"content": `<style>.i5ombpb5y {
  fill: currentColor;
  d: path("m15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z");
}
</style><path class="i5ombpb5y"/>`,
		"fallback": "ic:outline-east",
	});
}

export default Component;
