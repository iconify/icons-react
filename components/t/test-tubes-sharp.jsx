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
		"content": `<style>.ggdulzbvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18M4.5 18v3m15-3v3M6.25 3h3.5v12h-3.5v-1.75Zm8 0h3.5v12h-3.5v-1.75Zm-8 7.5h3.5m4.5-2h3.5");
}
</style><path class="ggdulzbvv"/>`,
		"fallback": "iconoven:test-tubes-sharp",
	});
}

export default Component;
