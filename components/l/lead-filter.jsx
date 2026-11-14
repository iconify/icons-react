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
		"content": `<style>.nnjqw0blm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5l.129.001M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8.25 8H21l-2.25 3.25V21L17 20v-1.75Z");
}
</style><path class="nnjqw0blm"/>`,
		"fallback": "uix-sharp:lead-filter",
	});
}

export default Component;
