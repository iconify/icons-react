import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l5h2p1khh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.764 30.167l2.185-12.334m2.119 12.334l2.185-12.334m-7.599 8.774h7.781m-6.87-5.214h7.781m-12.513 14.94H11.6c-3.38 0-6.1-2.676-6.1-6V11.5c0-3.324 2.72-6 6.1-6h4.233zm16.334-24.666H36.4c3.38 0 6.1 2.676 6.1 6V36.5c0 3.324-2.72 6-6.1 6h-4.233z");
}
</style><path class="l5h2p1khh"/>`,
		"fallback": "arcticons:ryujinxandroid",
	});
}

export default Component;
