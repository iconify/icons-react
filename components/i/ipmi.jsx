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
		"content": `<style>.fn7g7z-xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 15.5h-10v-12h19v9.4m-15-3.4h.01m3.49 0h7.5M16 15.25a3 3 0 1 0 4 0m-2-1.75v4");
}
</style><path class="fn7g7z-xi"/>`,
		"fallback": "uix-sharp:ipmi",
	});
}

export default Component;
