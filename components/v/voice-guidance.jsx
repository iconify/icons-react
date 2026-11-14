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
		"content": `<style>.qtlfedb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h4l5-4.5v15l-5-4.5h-4Zm11.828.172a4 4 0 0 1 0 5.656m1.993-8.573a7.5 7.5 0 0 1 0 11.49");
}
</style><path class="qtlfedb1v"/>`,
		"fallback": "uix-sharp:voice-guidance",
	});
}

export default Component;
