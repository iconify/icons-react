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
		"content": `<style>.mpw9dxmnm {
  fill: currentColor;
  d: path("M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z");
}
</style><path class="mpw9dxmnm"/>`,
		"fallback": "ic:twotone-signal-cellular-connected-no-internet-4-bar",
	});
}

export default Component;
