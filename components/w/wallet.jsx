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
		"content": `<style>.p0653kfju {
  d: path("M3 4.5h18v15H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vaxemf0zs {
  d: path("M21 9.5h-4a2.5 2.5 0 0 0 0 5h4");
}
</style><g class="ulnmmdpxh"><path class="p0653kfju"/><path class="vaxemf0zs"/></g>`,
		"fallback": "uix-sharp:wallet",
	});
}

export default Component;
