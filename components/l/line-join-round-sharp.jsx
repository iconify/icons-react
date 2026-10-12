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
		"content": `<style>.m3ce0y_pa {
  d: path("M2.75 5.25h13v16m-13-7.5h4.5v7.5");
}

.qr9-o6rkg {
  d: path("M2.75 9.5h8.75v11.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m3ce0y_pa"/><path class="qr9-o6rkg"/></g>`,
		"fallback": "iconoven:line-join-round-sharp",
	});
}

export default Component;
