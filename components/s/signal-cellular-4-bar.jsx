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
		"content": `<style>.b2p6r_ejb {
  fill: currentColor;
  d: path("M3 21L21 3v18z");
}
</style><path class="b2p6r_ejb"/>`,
		"fallback": "material-symbols-light:signal-cellular-4-bar",
	});
}

export default Component;
