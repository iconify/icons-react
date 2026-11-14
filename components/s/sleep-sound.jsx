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
		"content": `<style>.vlq3st85j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.5a7.5 7.5 0 0 0 0 15a9 9 0 0 1 0-15Zm3 4a5 5 0 0 1 0 7m3.5-10a9 9 0 0 1 0 13");
}
</style><path class="vlq3st85j"/>`,
		"fallback": "uix-sharp:sleep-sound",
	});
}

export default Component;
