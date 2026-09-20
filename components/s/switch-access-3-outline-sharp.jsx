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
		"content": `<style>.r43fms93k {
  fill: currentColor;
  d: path("M10 22v-4h2v2h8V4h-8v2h-2V2h12v5.125h1v4.75h-1V22zm-8-3v-4h4v4zm8-3l-1.4-1.4l1.575-1.6H2v-2h8.175L8.6 9.4L10 8l4 4zM2 9V5h4v4z");
}
</style><path class="r43fms93k"/>`,
		"fallback": "material-symbols:switch-access-3-outline-sharp",
	});
}

export default Component;
