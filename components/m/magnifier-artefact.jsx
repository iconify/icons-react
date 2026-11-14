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
		"content": `<style>.p54iyzbye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm9.5 4l5.5 5.5M3 21.5l.5-4L8 16l4 2l-1 3.5Z");
}
</style><path class="p54iyzbye"/>`,
		"fallback": "uix-sharp:magnifier-artefact",
	});
}

export default Component;
