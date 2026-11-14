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
		"content": `<style>.wf-zsqdaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h8.5V11a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4Zm8.5 2H16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5M10.25 15v5.5M7 20.5h6.5M6 7h8.5");
}
</style><path class="wf-zsqdaj"/>`,
		"fallback": "uix-sharp:irish-coffee-glass",
	});
}

export default Component;
