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
		"content": `<style>.knv3vbckl {
  fill: currentColor;
  d: path("M2 20v-2h18V4h2v14q0 .825-.587 1.413T20 20zm8-4v-6h8v6z");
}
</style><path class="knv3vbckl"/>`,
		"fallback": "material-symbols:picture-in-picture-small-outline",
	});
}

export default Component;
