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
		"content": `<style>.zgci_x-ba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.75h18m-17-9.5h3.25V17H4Zm6.25-6h3.25V17h-3.25Zm6.25 3.5h3.25V17H16.5Z");
}
</style><path class="zgci_x-ba"/>`,
		"fallback": "uix-sharp:match-stats",
	});
}

export default Component;
