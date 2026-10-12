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
		"content": `<style>.mvrd__2et {
  d: path("M3.75 9.75h16.5v11.5H3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-arkbiqg {
  d: path("M7 12.75h2m2 0h2m2 0h2M7 16.5h2m6 0h2m-6 4.75V18h2v3.25M7 2.75h10v4.5H7zM10 5h4");
}
</style><g class="x2cwu0gfd"><path class="mvrd__2et"/><path class="z-arkbiqg"/></g>`,
		"fallback": "iconoven:penthouse-sharp",
	});
}

export default Component;
