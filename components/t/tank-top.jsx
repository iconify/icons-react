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
		"content": `<style>.kfldecccp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h2.25a2.75 2.75 0 0 0 5.5 0H17v.75c0 3.5.75 5.5 2.25 6.75v10a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1v-10C6.25 9 7 7 7 3.5Zm-2 14.5h14");
}
</style><path class="kfldecccp"/>`,
		"fallback": "iconoven:tank-top",
	});
}

export default Component;
