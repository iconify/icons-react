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
		"content": `<style>.p2z28acvi {
  fill: currentColor;
  d: path("M13 20v-7.6l-5-5v2.25H6V4h5.65v2H9.4l5.6 5.6V20z");
}
</style><path class="p2z28acvi"/>`,
		"fallback": "material-symbols:turn-slight-left-outline-sharp",
	});
}

export default Component;
