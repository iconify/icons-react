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
		"content": `<style>.nwvk81bwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.8 9.89l3.65-3.53l.8-.61v12.5l-.8-.61l-3.65-3.53l-.8-.61v-3zM2.75 12H16M2.75 10.5v3m3-1.5v5.5h7.5V12m-5.5 0V7.75M10.5 12V7.75M13.25 12V7.75M7 7.75h1.5m1.25 0h1.5m1.25 0H14");
}
</style><path class="nwvk81bwb"/>`,
		"fallback": "iconoven:trumpet-sharp",
	});
}

export default Component;
