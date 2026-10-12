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
		"content": `<style>.svt2cjb9p {
  d: path("M4.75 5.5h14.5M6 5.5h12v15.75H6zm3 3v2.25m6-2.25v2.25M9 13v2.25");
}

.u4cz93-kl {
  d: path("M12.75 21.25V16.5h2.5v4.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="svt2cjb9p"/><path class="u4cz93-kl"/></g>`,
		"fallback": "iconoven:town-house-sharp",
	});
}

export default Component;
