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
		"content": `<style>.qx66-bjff {
  fill: currentColor;
  d: path("M13 18h-2v-2h2zm2-4H9v6h6zm4-4.7V4h-3v2.6L12 3L2 12h3l7-6.31L19 12h3z");
}
</style><path class="qx66-bjff"/>`,
		"fallback": "ic:sharp-roofing",
	});
}

export default Component;
