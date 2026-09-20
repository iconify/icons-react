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
		"content": `<style>.ly6l7j8zz {
  fill: currentColor;
  d: path("M9 20v-7.575q0-.4.15-.763t.425-.637L14.6 6h-2.25V4H18v5.65h-2V7.4l-5 5V20z");
}
</style><path class="ly6l7j8zz"/>`,
		"fallback": "material-symbols:turn-slight-right",
	});
}

export default Component;
