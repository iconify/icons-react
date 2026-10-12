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
		"content": `<style>.ih48-k-wc {
  d: path("M5.25 9.5h13.5v4.25H5.25zm3.38 0v4.25M12 9.5v4.25m3.38-4.25v4.25");
}

.pbh9qf25u {
  d: path("M2.75 7h18.5v10H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pbh9qf25u"/><path class="ih48-k-wc"/></g>`,
		"fallback": "iconoven:odometer-sharp",
	});
}

export default Component;
