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
		"content": `<style>.b7_n66beh {
  d: path("M2.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.g0iyfmbel {
  d: path("M9.75 15.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.rxtayfdmd {
  d: path("M7 12h14.5v6.5h-13M7 7.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b7_n66beh"/><path class="rxtayfdmd"/><path class="g0iyfmbel"/></g>`,
		"fallback": "uix-sharp:price-sticker-roll",
	});
}

export default Component;
