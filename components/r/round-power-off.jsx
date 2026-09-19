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
		"content": `<style>.xidv8mbly {
  fill: currentColor;
  d: path("M18 13.66V8.99c0-1-1.01-2-2-1.99V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.88l7.63 7.63c.15-.3.25-.63.25-.97M10 4c0-.55-.45-1-1-1s-1 .45-1 1v.88l2 2zm10.15 15.86l-7.66-7.66l-5.1-5.1l-2.56-2.56a.996.996 0 1 0-1.41 1.41l2.63 2.63c-.03.13-.05.27-.05.41v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l.48-.48l3.76 3.76c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42");
}
</style><path class="xidv8mbly"/>`,
		"fallback": "ic:round-power-off",
	});
}

export default Component;
