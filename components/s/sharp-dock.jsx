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
		"content": `<style>.tqx3kwm5o {
  fill: currentColor;
  d: path("M8 23h8v-2H8zM18 1.01L6 1v18h12zM16 15H8V5h8z");
}
</style><path class="tqx3kwm5o"/>`,
		"fallback": "ic:sharp-dock",
	});
}

export default Component;
