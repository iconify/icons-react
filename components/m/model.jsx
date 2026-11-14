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
		"content": `<style>.atv66_b1j {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.dt3xglyfp {
  d: path("m12 2.5l8.25 4.75v9.5L12 21.5l-8.25-4.75v-9.5ZM3.75 7.25l6.5 3.75m10-3.75L13.75 11M12 14v7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dt3xglyfp"/><path class="atv66_b1j"/></g>`,
		"fallback": "uix-sharp:model",
	});
}

export default Component;
