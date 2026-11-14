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
		"content": `<style>.z8ixi7bgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6l4.5 19h-15ZM5.75 17h12.5M12 17l3-10");
}
</style><path class="z8ixi7bgf"/>`,
		"fallback": "uix-sharp:metronome-device",
	});
}

export default Component;
