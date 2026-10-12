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
		"content": `<style>.bgvndv3cj {
  d: path("M2.75 2.75h18.5v18.5H2.75zM8 17.5V7");
}

.thnol90qj {
  d: path("M8.5 6.5h7.75l-.33.37l-1.34 1.51l-.33.37l.33.37l1.34 1.51l.33.37H8V6.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bgvndv3cj"/><path class="thnol90qj"/></g>`,
		"fallback": "iconoven:milestone-post-sharp",
	});
}

export default Component;
