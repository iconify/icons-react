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
		"content": `<style>.mc_y8rbqp {
  d: path("M13.5 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM4 17l5-5l4 4l2.5-2l4.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-ptnzbaj {
  d: path("M4 4.5h16v15H4Z");
}
</style><g class="ulnmmdpxh"><path class="y-ptnzbaj"/><path class="mc_y8rbqp"/></g>`,
		"fallback": "uix-sharp:travel-photo-album",
	});
}

export default Component;
