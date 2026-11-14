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
		"content": `<style>.z-v_nrbqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19m-17 0v-8M8 20V6m3.5 14V9M15 20V4m3.5 16v-7");
}
</style><path class="z-v_nrbqp"/>`,
		"fallback": "uix-sharp:spectrogram",
	});
}

export default Component;
