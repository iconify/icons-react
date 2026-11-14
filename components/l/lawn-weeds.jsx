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
		"content": `<style>.e01tmcbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.25 7.25l-.456.456a1.5 1.5 0 0 0-.395.697L14.25 9a.92.92 0 0 1-1.215.638l-.508-.19a1.5 1.5 0 0 0-1.054 0l-.508.19A.92.92 0 0 1 9.75 9l-.149-.597a1.5 1.5 0 0 0-.395-.697L8.75 7.25a1.06 1.06 0 0 1 0-1.5l.456-.456a1.5 1.5 0 0 0 .395-.697L9.75 4a.92.92 0 0 1 1.215-.638l.508.19a1.5 1.5 0 0 0 1.054 0l.508-.19A.92.92 0 0 1 14.25 4l.149.597a1.5 1.5 0 0 0 .395.697l.456.456a1.06 1.06 0 0 1 0 1.5m-3.25 2V20.5m0-1Q6 19 5 14q4.5 1 7 5.5m0 0q6-.5 7-5.5q-4.5 1-7 5.5m-9 1h18");
}
</style><path class="e01tmcbrg"/>`,
		"fallback": "uix:lawn-weeds",
	});
}

export default Component;
