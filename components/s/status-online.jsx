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
		"content": `<style>.pha4gg2xa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 12q0 3.21 2.27 5.48T12 19.75t5.48-2.27T19.75 12t-2.27-5.48T12 4.25T6.52 6.52T4.25 12");
}
</style><path class="pha4gg2xa"/>`,
		"fallback": "uix-solid:status-online",
	});
}

export default Component;
