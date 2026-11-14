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
		"content": `<style>.suidx4pef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.856 5.371l4.773 4.773a2.625 2.625 0 0 1 0 3.712l-1.944 1.945a2.625 2.625 0 0 1-3.713 0l-4.773-4.773a2.625 2.625 0 0 1 0-3.713l1.945-1.944a2.625 2.625 0 0 1 3.712 0m-3.27 8.043l-5.657 5.657m7.248-11.49l-1.768 1.767m3.889.354L12.53 11.47m3.889.353l-1.767 1.768");
}
</style><path class="suidx4pef"/>`,
		"fallback": "uix:litter-scoop",
	});
}

export default Component;
