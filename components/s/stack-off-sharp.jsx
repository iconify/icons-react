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
		"content": `<style>.tbjin1bwl {
  fill: currentColor;
  d: path("M22 19.15L10.85 8H22zM14 6V4H6.85l-2-2H16v4zm6.575 17.425L19.15 22H8V10.85l-4-4V14h2v2H2V4.85L.575 3.425L2 2l20 20z");
}
</style><path class="tbjin1bwl"/>`,
		"fallback": "material-symbols:stack-off-sharp",
	});
}

export default Component;
