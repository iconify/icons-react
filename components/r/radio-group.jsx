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
		"content": `<style>.zbarogbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 3 5Zm1 7a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 4 12Zm-1 7a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 3 19Zm7.5-14h10m-10 7h10m-10 7H17");
}
</style><path class="zbarogbgk"/>`,
		"fallback": "uix-sharp:radio-group",
	});
}

export default Component;
