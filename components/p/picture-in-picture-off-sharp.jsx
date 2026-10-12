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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgig8fqce {
  d: path("M12.25 11.75h5.5V16h-5.5z");
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="zgig8fqce"/></g>`,
		"fallback": "iconoven:picture-in-picture-off-sharp",
	});
}

export default Component;
