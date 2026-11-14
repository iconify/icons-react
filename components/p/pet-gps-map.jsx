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
		"content": `<style>.pdknsqbcb {
  d: path("M10 11.75a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0ZM9.5 8h.01M12 6.5h.01M14.5 8h.01");
}

.r07mz1v9b {
  d: path("M12 21.5s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r07mz1v9b"/><path class="pdknsqbcb"/></g>`,
		"fallback": "uix-sharp:pet-gps-map",
	});
}

export default Component;
