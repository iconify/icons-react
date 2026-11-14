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
		"content": `<style>.yln8rccif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M3 8.5h18M3 13h12.5M3 17.5h8.4m2.85.5L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><path class="yln8rccif"/>`,
		"fallback": "uix-sharp:property-description",
	});
}

export default Component;
