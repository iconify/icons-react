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
		"content": `<style>.lbq-w3oya {
  fill: currentColor;
  d: path("M3 21V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zm4-4h7.175l-2-2H9v-3.175l-2-2zm14 1.15l-4-4V7h-5.875v1.275L5.85 3H21zm-6-6l-2-2V9h2z");
}
</style><path class="lbq-w3oya"/>`,
		"fallback": "material-symbols:nfc-off-sharp",
	});
}

export default Component;
