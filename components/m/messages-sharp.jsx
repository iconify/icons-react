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
		"content": `<style>.ke3r_gprn {
  d: path("M8.25 7.25v-3.5h13v10.5H18.5v2.907l-.85-.607l-1.15-2.3");
}

.vkken9bhu {
  d: path("M2.75 10.25v-2h12.5v10H9.5L5.85 21l-.85.607V18.25H2.75v-2Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ke3r_gprn"/><path class="vkken9bhu"/></g>`,
		"fallback": "iconoven:messages-sharp",
	});
}

export default Component;
