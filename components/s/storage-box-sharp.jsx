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
		"content": `<style>.ouu928b9k {
  d: path("M2.75 4.25h18.5v3.5H2.75zm1.5 3.5h15.5v13.5H4.25v-2Z");
}

.vktvftqbh {
  d: path("M9 10.75h6v2.5H9z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ouu928b9k"/><path class="vktvftqbh"/></g>`,
		"fallback": "iconoven:storage-box-sharp",
	});
}

export default Component;
