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
		"content": `<style>.k1tl87bzj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.6 17H2.5V2.5H17V13M2.5 6H17M2.5 9.75H17M2.5 13.5h12.4m-.65 3.75a5.3 5.3 0 0 1 7.5 0M16 19a2.83 2.83 0 0 1 4 0m-2 2h.01");
}
</style><path class="k1tl87bzj"/>`,
		"fallback": "uix-sharp:smart-vent",
	});
}

export default Component;
