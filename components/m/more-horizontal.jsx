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
		"content": `<style>.cl-hnubfx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 12q0-1.75 1.75-1.75T6.5 12t-1.75 1.75T3 12m9-1.75q-1.75 0-1.75 1.75T12 13.75T13.75 12T12 10.25M17.5 12q0-1.75 1.75-1.75T21 12t-1.75 1.75T17.5 12");
}
</style><path class="cl-hnubfx"/>`,
		"fallback": "uix-solid:more-horizontal",
	});
}

export default Component;
