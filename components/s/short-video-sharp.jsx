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
		"content": `<style>.igqhghbqi {
  d: path("M4.25 2.75h11v18.5h-11z");
}

.s22wh8pnp {
  d: path("M8.25 9.5v5l-.029 1.394L9.4 15.15l3.75-2.5l1.129-.65l-1.129-.65l-3.75-2.5l-1.179-.744zm9.5-2l1.5-1.5l1.5 1.5m-3 9l1.5 1.5l1.5-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="igqhghbqi"/><path class="s22wh8pnp"/></g>`,
		"fallback": "iconoven:short-video-sharp",
	});
}

export default Component;
