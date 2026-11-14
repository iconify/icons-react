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
		"content": `<style>.r169l0bpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19.5L7 15h13.5L17 19.5Zm8.5-2.25V4M8.75 7.25L12 4l3.25 3.25");
}
</style><path class="r169l0bpw"/>`,
		"fallback": "uix-sharp:normal-vector",
	});
}

export default Component;
