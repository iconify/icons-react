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
		"content": `<style>.hmrsb0bpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 17.5h13V21H6Zm5 0l6.5-15m-12 12c-1-1.5 1-3.5 0-5.5m3 5.5c-1-1.5 1-3.5 0-5.5");
}
</style><path class="hmrsb0bpv"/>`,
		"fallback": "uix-sharp:steam-mop",
	});
}

export default Component;
