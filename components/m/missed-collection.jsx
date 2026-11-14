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
		"content": `<style>.anpnfr14e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 7.5l1-3H17l1 3Zm1.5 0l1.25 13h6.04m3.739-8.103L16.5 7.5M15 15l6 6m0-6l-6 6");
}
</style><path class="anpnfr14e"/>`,
		"fallback": "uix:missed-collection",
	});
}

export default Component;
