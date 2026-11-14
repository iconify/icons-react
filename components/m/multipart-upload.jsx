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
		"content": `<style>.kh7w6nbqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V11M8 6.5l4-4l4 4m-11 8h14M5 18h14M5 21.5h14");
}
</style><path class="kh7w6nbqk"/>`,
		"fallback": "uix-sharp:multipart-upload",
	});
}

export default Component;
