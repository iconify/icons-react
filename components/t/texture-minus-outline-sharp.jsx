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
		"content": `<style>.m9rgj4bgd {
  fill: currentColor;
  d: path("M4.4 21H3v-1.4L19.6 3h1.425v1.4zm4.9 0l2.7-2.7V21zm4.7-2v-2h8v2zM3 14.7v-2.8L11.9 3h2.8zm12.3.3L21 9.3v2.8L18.1 15zM3 7V3h4z");
}
</style><path class="m9rgj4bgd"/>`,
		"fallback": "material-symbols:texture-minus-outline-sharp",
	});
}

export default Component;
