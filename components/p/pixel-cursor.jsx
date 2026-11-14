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
		"content": `<style>.r8kuep3ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3v15.5h2.5V16h2.5v2.5h2.5V21h5v-2.5h-2.5V16h2.5v-2.5h-2.5V11h-2.5V8.5h-2.5V6h-2.5V3Zm5 13h5");
}
</style><path class="r8kuep3ql"/>`,
		"fallback": "uix-sharp:pixel-cursor",
	});
}

export default Component;
