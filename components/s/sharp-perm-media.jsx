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
		"content": `<style>.kcy8u1b1k {
  fill: currentColor;
  d: path("M2 6H0v16h20v-2H2zm22-2H14l-2-2H4v16h20zM7 15l4.5-6l3.5 4.51l2.5-3.01L21 15z");
}
</style><path class="kcy8u1b1k"/>`,
		"fallback": "ic:sharp-perm-media",
	});
}

export default Component;
