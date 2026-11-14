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
		"content": `<style>.be3othb3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.5h13l-1 14h-11Zm-2 0h17M9 6.5v-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2m-5 4v6m4-6v6");
}
</style><path class="be3othb3v"/>`,
		"fallback": "uix-sharp:trash",
	});
}

export default Component;
