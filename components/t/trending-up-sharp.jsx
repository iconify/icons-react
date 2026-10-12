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
		"content": `<style>.kl_ihr82r {
  d: path("M15.25 6.75h6v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybu90co9r {
  d: path("m2.75 17.25l6-6l4 4l8.5-8.5");
}
</style><g class="x2cwu0gfd"><path class="ybu90co9r"/><path class="kl_ihr82r"/></g>`,
		"fallback": "iconoven:trending-up-sharp",
	});
}

export default Component;
