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
		"content": `<style>.kp6ue4vso {
  d: path("M3.25 5v4.5h17.5V5M12 9.5v2.25m-1.5 0h3v4h-3zM9 18.25h6v3H9z");
}

.spqq3xssj {
  d: path("M6.25 2.75h11.5v4.5H6.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="spqq3xssj"/><path class="kp6ue4vso"/></g>`,
		"fallback": "iconoven:jade-roller-sharp",
	});
}

export default Component;
