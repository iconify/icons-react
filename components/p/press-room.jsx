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
		"content": `<style>.skwewtzty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-17 0v8m15-8v8m-15-8V3h4L11 5.5v8m4.258-11.157l5.796 1.553l-1.812 6.761l-5.796-1.553Z");
}
</style><path class="skwewtzty"/>`,
		"fallback": "uix-sharp:press-room",
	});
}

export default Component;
