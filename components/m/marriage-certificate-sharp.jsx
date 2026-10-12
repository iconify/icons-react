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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk1v3abqe {
  d: path("M12.25 9.6a2.4 2.4 0 1 0 0 3.8m-.5-3.8a2.4 2.4 0 1 1 0 3.8M8.25 6h7.5m-7.5 11.25h7.5");
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="yk1v3abqe"/></g>`,
		"fallback": "iconoven:marriage-certificate-sharp",
	});
}

export default Component;
