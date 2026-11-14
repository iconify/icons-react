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
		"content": `<style>.zitu0ab1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.076 2.5h1.848a2.625 2.625 0 0 1 2.554 2.02l3.257 13.75a2.625 2.625 0 0 1-2.554 3.23H7.819a2.625 2.625 0 0 1-2.554-3.23L8.522 4.52a2.625 2.625 0 0 1 2.554-2.02M5.75 17h12.5M12 17l3-10");
}
</style><path class="zitu0ab1h"/>`,
		"fallback": "uix:metronome-device",
	});
}

export default Component;
